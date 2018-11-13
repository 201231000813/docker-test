const Redis = require('./redis');
const Mongodb = require('./mongodb');


module.exports = {
    async init(configs) {
        let [redis, mongodb] = await Promise.all([
            Redis.build(configs.redis),
            Mongodb.build(configs.mongodb)
        ]);
        return { redis, mongodb };
    },
};

