let koaBody = require('koa-body');
let Router = require('koa-router');

let router = new Router();
router.use(koaBody());

let redis = require('./redis.js');
router.use('/api/redis', redis.api.routes());

let mongodb = require('./mongodb');
router.use('/api/mongodb', mongodb.api.routes());

module.exports = router;
