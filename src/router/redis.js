let Router = require('koa-router');

let api = new Router();

api.get('/key/:key', async function(ctx) {
	let { key } = ctx.params;
	let value = await ctx.resources.redis.getAsync(key);
	ctx.body = {ok: 1, value};
});

api.post('/key', async function(ctx) {
	let { key, value } = ctx.request.body;
	console.log( { key, value } );
	await ctx.resources.redis.setAsync(key, value);
	ctx.body = { ok: 1 };
});

api.get('/keys', async function (ctx) {
	ctx.body = await ctx.resources.redis.keysAsync('*');
});

module.exports = { api };