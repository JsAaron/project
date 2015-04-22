var http = require("http");
var url = require("url");
var requestHandlers = require("./requestHandlers");

function start(route) {
	http.createServer(function(request, response) {
		var pathname = url.parse(request.url).pathname;
		// requestHandlers.start(request)
		// // route(pathname);
		requestHandlers.start(response);
	}).listen(3000);
}

exports.start = start;