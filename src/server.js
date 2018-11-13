const Koa = require('koa');
const router = require('./router');
const configs = require('./configs');
const resources = require('./resources');


class Server {
  constructor() {
    console.log('MY_PROJECT_REDIS_URI', process.env.MY_PROJECT_REDIS_URI);
    console.log('MY_PROJECT_MONGODB_URI', process.env.MY_PROJECT_MONGODB_URI);
  }

  async start() {
	  let app = new Koa();

    app.context.resources = await resources.init(configs);
	  app.use(router.routes());
	  app.listen(configs.PORT);
  
    process.on('unhandledRejection', (reason, p) => {
      logger.warn({p:util.format(p)}, 'unhandled rejection');
    });
  
    process.on('rejectionHandled', (p) => {
      logger.info({p:util.format(p)}, 'rejection unhandled');
    });
  
    process.on('uncaughtException', (err) => {
      logger.fatal({err}, 'uncaught exception');
    });
  }

}

module.exports = Server;