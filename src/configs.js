
module.exports = {
	PORT: process.env.PORT || 3333,
	redis: {
        uri: process.env.MY_PROJECT_REDIS_URI || `redis://localhost`
	},
	mongodb: {
        uri: process.env.MY_PROJECT_MONGODB_URI || `mongodb://localhost:27017/test`,
	},
};