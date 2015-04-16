var formidable = require('formidable'),
  http = require('http'),
  util = require('util');

var requestHandlers = require('./requestHandlersSava');

http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      requestHandlers.upload(res,
          fields
      )
      // res.writeHead(200, {
      //   'content-type': 'text/plain'
      // });
      // res.write(
      //     util.inspect({
      //       fields: fields,
      //       files: files
      //     })
      // );
      // res.end();
    });
    return;
  }
  requestHandlers.start(res)

}).listen(3000)