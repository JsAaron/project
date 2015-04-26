var express  = require('express')
var path     = require('path')
var port     = process.env.PORT || 3000
var app      = express()
var _        = require('underscore')
var mongoose = require('mongoose')
var Movie    = require('./models/movie')

mongoose.connect('mongodb://localhost/aaron')

app.set('views', './pages')
app.set('view engine', 'jade')
app.use(express.bodyParser())
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

//首页
app.get('/', function(req, res) {
	Movie.fetch(function(err, movies) {
		res.render('index', {
			title  : 'imooc 首页',
			movies : movies
		})
	})
})


//详情页面
app.get('/detail/:id', function(req, res) {
	var id = req.params.id
	Movie.findById(id,function(err,movie){
		// console.log(movie)
		// res.render(movie)		
		res.render('detail',{
			title :'imooc' + movie.title,
			movie :movie
		})
	})
})


app.get('/admin/movie', function(req, res) {
	res.render('admin', {
		title: 'imooc 后台',
		movie:{
			title    :'',
			doctor   :'',
			country  :'',
			year     :'',
			poster   :'',
			flash    :'',
			summary  :'',
			language :'',
		}
	})
})


app.get('/admin/updade/:id', function(req, res) {
	var id = req.params.id
	if (id) {
		Movie.findById(id, function(err, movie) {
			res.render('admin', {
				title : 'imooc 后台更新页',
				movie : movie
			})
		})
	}
})

//admin post movie
app.post('/admin/movie/new', function(res, req) {
	var id = req.body.movie._id;
	var movieObj= req.body.movie;
	var _moive

	if (id !== 'undefined') {
		Movie.findById(id, function(err, movies) {
			if (err) {
				console.log(err)
			}
			_moive = _.extend(movie, movieObj)
			_moive.save(function(err, movie) {
				if (err) {
					console.log(err)
				}
				res.redirect('/movie' + movie._id)
			})
		})
	} else {
		_moive = new Movie({
			doctor   : movieObj.doctor,
			title    : movieObj.title,
			country  : movieObj.country,
			language : movieObj.language,
			year     : movieObj.year,
			flash    : movieObj.flash,
			summary  : movieObj.sunmmary
		})

		_moive.save(function(err,movie){
			if(err){
				console.log(err)
			}
			res.redirect('/movie/' + movie_id)
		})
	}
})


app.get('/admin/list', function(req, res) {
	res.render('list', {
		title: 'imooc 列表',
		movies: [{
			title    :'机器',
			_id      :1,
			doctor   :'机器',
			country  :'美国',
			year     :2014,
			language :'机器',
			flash    :'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf'
		} ]
	})
})


console.log('imooc started on port ' + port)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         