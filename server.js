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
server.listen(12345);
console.log('Koa server listening on localhost:12345'); // eslint-disable-line
