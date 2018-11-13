const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis);

module.exports = {
    async build(configs) {
        let client = redis.createClient(configs.uri, configs.options);
        client.on("error", (err) => console.error('初始化Redis失败', err));
        return client;
    }
};