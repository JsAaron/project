var express = require('express'),
	routes = require('./routes'),
	user = require('./routes/user'),
	movie = require('./routes/movie'),
	http = require('http'),
	path = require('path'),
	ejs = require('ejs'),
	SessionStore = require("session-mongoose")(express);


app.get('/movie/add', movie.movieAdd); //增加
app.post('/movie/add', movie.doMovieAdd); //提交
app.get('/movie/:name', movie.movieAdd); //编辑查询
app.get('/movie/json /:name', movie.movieJSON); //JSON数据