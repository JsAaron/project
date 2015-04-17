var connect = require('connect');
connect.logger({ immediate: true, format: 'dev' })
var app = connect()
    .use(function (req, res) {
        res.end('hello world\n');
    })
    .listen(3000);