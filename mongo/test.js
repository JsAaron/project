var mongoose = require('mongoose');

// 连接字符串格式为mongodb://主机/数据库名
mongoose.connect('mongodb://localhost/aaron');

// 数据库连接后，可以对open和error事件指定监听函数
var db = mongoose.connection;
db.on('error', function() {
	console.log('connection error')
});
db.once('open', function(callback) {
	console.log('打开数据库')
});

//mongoose.Schema方法用来定义数据集的格式（schema）
var Schema = mongoose.Schema;
var userSchema = new Schema({
	name    : String,
	age     : Number,
	DOB     : Date,
	isAlive : Boolean
});

var myModel = mongoose.model('movies');

// var instance = new myModel();

// console.log(instance)



// mongoose.model方法将格式分配给指定的数据集。
// var Movies = mongoose.model('Movies', userSchema);

//插入数据
// var arvind = new Movies({
// 	name    : 'Arvind',
// 	age     : 99,
// 	DOB     : '01/01/1915',
// 	isAlive : 0
// });

// arvind.save(function(err, data) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('插入成功');
// 	}
// });


// console.log(Movies.name)


//查找所有电影
// Movies.find(function(err,movies){
//     if(err) return console.err(err);
//     console.dir(movies);
// });    