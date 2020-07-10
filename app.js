var express = require('express');
var http = require('http');
var serveStatic = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//기본 포트를 app 객체에 속성으로 설정
//process.env 객체에 PORT 속성이 있으면 그걸 사용, 없으면 3000
app.set('port', process.env.PORT || 3000);


// body-parser를 사용해 application/x-www-form-urlenceded 파싱
app.use(bodyParser.urlencoded({extended: false}));

// body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

app.use(serveStatic(path.join(__dirname, 'public')));

// middle-ware
app.use(function(req, res, next){
    console.log('first middle-ware handled request');
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req. query.password;
    // var userAgent = req.header('User-Agent');
    // var paramName = req.query.name;
    // console.log(req)

    res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>Express server responding</h1>');
    res.write('<div><p>User-Agent : ' + paramId + ' </p></div>')
    res.write('<div><p>ParamName : ' + paramPassword + ' </p></div>')
    res.end();
})



//express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('express server is started : ' + app.get('port'));
})

