let server = require('./server.js');
let configs = require('./configs.js');

new server()
	.start()
	.then(_ => console.log(`the server listen on 127.0.0.1:${configs.PORT}`))
	.catch(err => console.error('程序启动失败', err));