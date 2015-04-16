var formidable = require('formidable'),
  http = require('http'),
  util = require('util');

var requestHandlers = require('./requestHandlersSava');

http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      requestHandlers.upload(res,req)
      // res.writeHead(200, {
      //   'content-type': 'text/plain'
      // });
      // res.write('received upload:\n\n');
      // res.end(util.inspect({
      //   fields: fields,
      //   files: files
      // }));
    });
    return;
  }

  requestHandlers.start(res)

  // res.writeHead(200, {
  //   'content-type': 'text/html'
  // });
  // res.end(
  //   '<form action="/upload" enctype="multipart/form-data" ' +
  //   'method="post">' +
  //   '<input type="text" name="title"><br>' +
  //   '<input type="file" name="upload" multiple="multiple"><br>' +
  //   '<input type="submit" value="Upload">' +
  //   '</form>'
  // );
}).listen(3000)