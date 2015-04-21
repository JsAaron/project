var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var mongoStore = require('connect-mongo')(express)
var port = process.env.PORT || 3000
var app = express()


app.set('views', './app/views/pages')
app.set('view engine', 'jade')
app.use(express.bodyParser())
app.use(express.cookieParser())
app.use(express.multipart())


if ('development' === app.get('env')) {
  app.set('showStackError', true)
  app.use(express.logger(':method :url :status'))
  app.locals.pretty = true
  //mongoose.set('debug', true)
}

app.listen(port)
app.locals.moment = require('moment')
app.use(express.static(path.join(__dirname, 'public')))

console.log('imooc started on port ' + port)

