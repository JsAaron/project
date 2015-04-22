var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/aaron')

app.set('views', './pages')
app.set('view engine', 'jade')
app.use(express.bodyParser())
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

app.get('/', function(req, res) {
	res.render('index', {
		title: 'imooc 首页',
		movies: [{
			title: '机器1',
			_id: 1,
			poster: "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/whfpf=425,260,50/sign=8ccf579c063b5bb5be8273be50eee10b/b21bb051f81986189281b9b34fed2e738ad4e6c7.jpg"
		}, {
			title: '机器2',
			_id: 2,
			poster: "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/whfpf=425,260,50/sign=8ccf579c063b5bb5be8273be50eee10b/b21bb051f81986189281b9b34fed2e738ad4e6c7.jpg"
		}]
	})
})


app.get('/movie:id', function(req, res) {
	res.render('index', {
		title: 'movie 首页'
	})
})

app.get('/admin/movie', function(req, res) {
	res.render('index', {
		title: 'imooc 后台'
	})
})


app.get('/admin/list', function(req, res) {
	res.render('index', {
		title: 'imooc 列表'
	})
})




console.log('imooc started on port ' + port)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         