# Load Balance

## 💻 Usage

---

you can start a server :

```bash
$ yarn
$ yarn start
```

Currently, the `config/default.yml` configuration file is required, and
edit the value on `upstream-proxy`

```yml
upstream-proxy:
  - host: 127.0.0.1
    port: 3001
  - host: 127.0.0.1
    port: 3002
  - host: 127.0.0.1
    port: 3003
  - host: 127.0.0.1
    port: 3004
  - host: 127.0.0.1
    port: 3005
```
