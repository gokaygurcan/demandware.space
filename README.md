# demandware.space
Demandware request tester

---

![analytics](https://analytics.gokaygurcan.com/UA-55204660-5/gokaygurcan/demandware.space.svg?style=flat-square)
![website](https://img.shields.io/website/https/demandware.space.svg?style=flat-square)
![vulnerabilities](https://snyk.io/test/github/gokaygurcan/demandware.space/badge.svg?style=flat-square)
![travis ci](https://img.shields.io/travis/gokaygurcan/demandware.space.svg?style=flat-square)
![license](https://img.shields.io/github/license/gokaygurcan/demandware.space.svg?style=flat-square)

## Example outputs

```javascript
{
  "timestamp": 1476453887086,
  "method": "GET",
  "headers": {
    "x-real-ip": "123.123.123.123",
    "x-forwarded-for": "123.123.123.123",
    "x-nginx-proxy": "true",
    "x-forwarded-proto": "https",
    "host": "demandware.space",
    "connection": "close",
    "cache-control": "no-cache",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, sdch, br",
    "accept-language": "en-GB,en;q=0.8,en-US;q=0.6,tr;q=0.4"
  },
  "body": {},
  "qs": {},
  "authorization": {}
}
```

```javascript
{
  "timestamp": 1476452988652,
  "method": "POST",
  "headers": {
    "x-real-ip": "123.123.123.123",
    "x-forwarded-for": "123.123.123.123",
    "x-nginx-proxy": "true",
    "x-forwarded-proto": "https",
    "host": "demandware.space",
    "connection": "close",
    "content-length": "23",
    "authorization": "Basic dXNlcm5hbWU6cGFzc3dvcmQ=",
    "cache-control": "no-cache",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36",
    "content-type": "application/x-www-form-urlencoded",
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-GB,en;q=0.8,en-US;q=0.6,tr;q=0.4"
  },
  "body": {
    "key1": "value1",
    "key2": "value2"
  },
  "qs": {
    "key1": "value1",
    "key2": "value2"
  },
  "authorization": "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
}
```

## License

MIT © [Gökay Gürcan](https://www.gokaygurcan.com/)
