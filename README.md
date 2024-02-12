# Testing set global env in Hono on Cloudflare Workers

```
npm install
npm run dev
```

```
npm run deploy
```

This will result in the following error.

> ✘ [ERROR] Error: Cannot perform I/O on behalf of a different request. I/O objects (such as streams, request/response bodies, and others) created in the context of one request handler cannot be accessed from a different request's handler. This is a limitation of Cloudflare Workers which allows us to improve overall performance.
