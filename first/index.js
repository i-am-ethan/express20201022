//expressのオブジェクトの生成
var express = require('express');
//expressオブジェクトのexpressメソッドでアプリケーションとしての役割を担うオブジェクトを生成
var app = express();
//アプリケーションオブジェクトのgetメソッドでGETリクエストの登録をしている。
app.get('/', function(req,res){
  res.send('Hello Express');
});

var server = app.listen(1234, function(){
  console.log('サーバを起動しました');
})
