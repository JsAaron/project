var connect = require('connect');

	console.log(connect)


var app = connect()
	.use(connect.logger('dev'))
	.use(function(req, res) {
		res.end('hello world\n');
	}).listen(3000);