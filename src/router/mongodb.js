let Router = require('koa-router');

let api = new Router();

function getCollection(mongodb, name='test') {
	return mongodb.db('test').collection(name);
}

api.get('/key/:key', async function(ctx) {
	let { key } = ctx.params;
	let coll = getCollection(ctx.resources.mongodb);
	let value = await coll.findOne({ _id: key });
	ctx.body = {ok: 1, value};
});

api.post('/key', async function(ctx) {
	let { key, value } = ctx.request.body;
	let coll = getCollection(ctx.resources.mongodb);
	let result = await coll.findOneAndUpdate({ _id: key }, { $set: {value} }, {upsert: true});
	ctx.body = { ok: 1, result: result.value };
});



module.exports = { api };