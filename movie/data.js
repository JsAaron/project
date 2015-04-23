var mongoose = require("mongoose");

var db = mongoose.connection;    

db.on('error',console.error);
db.once('open',function(){
	console.log('连接成功')
    //在这里创建你的模式和模型
});   

mongoose.connect('mongodb://localhost/aaron');   


var movieSchema = new mongoose.Schema({
	doctor   : String,
	title    : String,
	language : String,
	country  : String,
	year     : Number,
	summary  : String
})

movieSchema.statics.findAllWithCreditCookies = function(callback){
    return this.find({ hasCreditCookie: true}, callback);
};


var Movie = mongoose.model('Movie', movieSchema);


// console.log(Movie)

// Movie.findAllWithCreditCookies(function(err, movies) {
// 	if (err) return console.error(err);
// 	console.dir(movies);
// });

//通过名字查找一部电影
Movie.findOne({year: 2018},function(err,thor){
    if(err) return console.err(err);
    console.dir(thor);
});

//查找所有电影    
// Movie.find(function(err,movies){
//     if(err) return console.err(err);
//     console.dir(movies);
// });    

// var move = new Movie({
// 	title:'机器战警',
// 	doctor:'荷兰',
// 	year:2018
// })


// move.save(function (err) {
//   if (err){
//   	 console.log('保存失败')
//   	 return;
//   }
//   console.log('meow');
// });