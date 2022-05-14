import config from 'config';
import http from 'http';
import { P2cBalancer, RandomBalancer } from 'load-balancers';
import httpProxy from 'http-proxy';

// Balancers
const proxies = config.get('upstream-proxy');
const balancer = new P2cBalancer(proxies.length);

// Proxy
const proxy = httpProxy.createProxyServer({
  proxyTimeout: config.get('proxyTimeout'),
});

// -- Server ----------------------------------------------------------------
const server = http.createServer((req, res) => {
  proxy.web(req, res, {
    target: proxies[balancer.pick()],
  });
});

server.listen(process.env.PORT || config.get('server.port'), (err) => {
  console.log(`Server Load Balancer running on http://${config.get('server.host')}:${process.env.PORT || config.get('server.port')}`);

  if (err) {
    console.log(err);
  }
});
