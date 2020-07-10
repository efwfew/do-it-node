var express = require('express');
var http = require('http');

var app = express();

//기본 포트를 app 객체에 속성으로 설정
app.set('port', process.env.PORT || 3000);

//express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('express server is started : ' + app.get('port'));
})