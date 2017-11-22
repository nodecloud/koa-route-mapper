# koa-route-mapper

This middleware will set a /mappers route as default for getting the URLs.

## Usage

``` javascript
import Koa from 'koa';
import KoaRouter from 'koa-router';
import KoaMapper from 'koa-route-mapper';

let app = new Koa();
const router = new KoaRouter();

app.use(KoaMapper('/mappers', [router]));
```

When visit the /mappers api, it will response:

```json
[
  {
    "path": "/v1/groups/",
    "methods": [
      "HEAD",
      "GET"
    ],
    "function": [
      "getGroups"
    ]
  },
  {
    "path": "/v1/groups/:groupId/members",
    "methods": [
      "HEAD",
      "GET"
    ],
    "function": [
      "getGroupMembers"
    ]
  }
]
```

## API

### KoaMapper(url, routers)

* url  default is /metrics.
* routers: array of router instance.
