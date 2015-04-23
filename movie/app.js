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

app.get('/', function(req, res) {
	Movie.fetch(function(err, movies) {
		res.render('index', {
			title  : 'imooc 首页',
			movies : movies
		})
	})
})

app.get('/movie:id', function(req, res) {
	var id = req.params.id;
	Movie.findById(id,function(err,movie){
		res.render('detail',{
			title:'imooc' + movie.title,
			movie:movie
		})
	})
})


app.get('/admin/movie', function(req, res) {
	res.render('admin', {
		title: 'imooc 后台'
	})
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
	res.render('index', {
		title: 'imooc 列表'
	})
})


console.log('imooc started on port ' + port)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         