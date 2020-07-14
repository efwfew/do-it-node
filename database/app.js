var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var static = require('serve-static');
var errorHandler = require('errorhandler');
var expressErrorHandler = require('express-error-handler');
var session = require('express-session');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({entended:false}));

app.use(bodyParser.json());

app.use('/public', static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(session({secret:'my key', resave:true, saveUninitialized: true}));

var router = express.Router();

router.route('/process/login').post(function(req, res) {
    console.log('/process/login called');
})

app.use('/', router);

var errorHandler = expressErrorHandler({ 
    static: {
        '404': './public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

http.createServer(app).listen(app.get('port'), function() {
    console.log('server is started. Port:' + app.get('port'));
});
