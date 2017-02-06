const koa = require('koa');
const koaLogger = require('koa-logger');

const server = new koa();
process.env.NODE_ENV !== 'testing' && server.use(koaLogger());
server.use(ctx => {
  if (ctx.originalUrl !== '/ping') {
    ctx.status = 404;
  } else {
    ctx.status = 200;
    ctx.body = 'Pong';
  }
});
server.listen(8080);
console.log('Koa server listening on localhost:8080'); // eslint-disable-line
