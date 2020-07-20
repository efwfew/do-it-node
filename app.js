var express = require("express");
var http = require("http");
var serveStatic = require("serve-static");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
var expressErrorHandler = require("express-error-handler");
var cookieParser = require("cookie-parser");
var session = require("express-session");

//기본 포트를 app 객체에 속성으로 설정
//process.env 객체에 PORT 속성이 있으면 그걸 사용, 없으면 3000
app.set("port", process.env.PORT || 3000);

// body-parser를 사용해 application/x-www-form-urlenceded 파싱
app.use(bodyParser.urlencoded({ extended: false }));

// body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

// cookie-parser 사용
app.use(cookieParser());
// express-session 설정
app.use(
  session({
    secret: "my key",
    resave: true,
    saveUninitialized: true,
  })
);

// static 사용 public 경로 지정
app.use("/public", serveStatic(path.join(__dirname, "public")));

// middle-ware
router.route("/process/showCookie").get(function (req, res) {
  console.log("/process/showCookie 호출");

  res.send(req.cookies);
});

router.route("/process/setUserCookie").get(function (req, res) {
  console.log("/process/setUserCookie 호출");

  // cookie 설정
  res.cookie("user", {
    id: "mike",
    name: "소녀시대",
    authorized: true,
  });
  //redirect
  res.redirect("/process/showCookie");
});

app.use("/", router);

//등록되지 않은 패스에 대해 페이지 오류 응답
// app.all('*', function(req, res){
//     res.status(404).send('<h1>ERROR - 페이지를 찾을수 없습니다.</h1>')
// });

// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
  static: {
    "404": "./public/404.html",
  },
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

//express 서버 시작
http.createServer(app).listen(app.get("port"), function () {
  console.log("express server is started : " + app.get("port"));
});
