var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var expressErrorHandler = require('express-error-handler');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var fs = require('fs');

// client 에서 ajax 요청시 cors(다중서버접속) 지원
var cors = require('cors');

//기본 포트를 app 객체에 속성으로 설정
//process.env 객체에 PORT 속성이 있으면 그걸 사용, 없으면 3000
app.set('port', process.env.PORT || 3000);


// body-parser를 사용해 application/x-www-form-urlenceded 파싱
app.use(bodyParser.urlencoded({extended: false}));

// body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

// cookie-parser 사용
app.use(cookieParser());
// express-session 설정
app.use(session({
    secret:'my key',
    resave:true,
    saveUninitialized:true,
}));

// static 사용 public 경로 지정, + uploads 폴더 오픈
app.use('/public', static(path.join(__dirname, 'public')));
app.use('/uploads', static(path.join(__dirname, 'uploads')));

// CORS 지원
app.use(cors());

// middle-ware
router.route('/process/product').get(function(req, res) {
    console.log('/process/product 호출');
    if (req.session.user) {
        res.redirect('/public/product.html');
    } else {
        res.redirect('/public/login.html');
    }
});

router.route('/process/login').post(function(req, res) {
    console.log('/process/login 호출');
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    if (req.session.user) {
        //로그인된 상태
        console.log('이미 로그인 되어 상품 페이지로 이동합니다.');

        res.redirect('/public/product.html');
    } else {
        //세션저장
        req.session.user = {
            id: 'mike',
            name:'소녀시대',
            authorized: true
        }
        res.writeHead('200', {'Content-Type':'text/html;charset=utf-8'});
        res.write('<h1>로그인 성공</h1>');
        res.write('<div><p>Param id : ' + paramId + '</p></div>');
        res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
        res.write("<div><p><a href='/process/product'>상품페이지로 이동하기</a></p></div>");
        res.end();
    }
})

router.route('/process/logout').get(function(req, res){
    console.log('/process/logout 호출');

    if(req.session.user) {
        //로그인된상태
        console.log('로그아웃 합니다');

        req.session.destroy(function(err) {
            if (err) {throw err;}

            console.log('세션을 삭제하고 로그아웃되었습니다.');
            res.redirect('/public/login.html');
        });
    } else {
        //로그인 안된 상태
        console.log('아직 로그인 하지 않았습니다');
        res.redirect('/public/login.html');
    }
})

app.use('/', router);

//등록되지 않은 패스에 대해 페이지 오류 응답
// app.all('*', function(req, res){
//     res.status(404).send('<h1>ERROR - 페이지를 찾을수 없습니다.</h1>')
// });

// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
    static: {
      '404': './public/404.html'
    }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );


//express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('express server is started : ' + app.get('port'));
})

