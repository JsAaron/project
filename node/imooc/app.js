var express = require('express')
var prot = process.env.PORT || 3000
var app = express()

app.set('view engine', 'jade'); // 设置模板引擎
app.set('views', './views');  // 设置模板相对路径(相对当前目录)
app.listen(prot)


// 调用当前路径下的 test.jade 模板
app.get('/', function(req, res) {
	res.render('test', {
		title: 'imooc首页'
	}); 
})


console.log('start imooc'+ prot)