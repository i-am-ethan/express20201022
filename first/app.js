var express = require('express');
var ejs = require('ejs');
var app = express();

//"テンプレートエンジンはEJSをつかうよ"と設定するための命令です
app.engine('ejs', ejs.renderFile);

//ファイルは自動的にviewsフォルダから検索されるので"views/"と書く必要はない"
app.get('/', function(req, res){
  res.render('temp.ejs', {
    contents:'<p>hoge</p>'
  });
});
var server = app.listen(1234, function(){
  console.log('サーバを起動しました');
});


