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

## API

### KoaMapper(url, routers)

* url  default is /metrics.
* routers: array of router instance.
