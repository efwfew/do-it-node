var http = require('http');

var opt = {
    host: 'www.google.com',
    port: 80,
    method: 'POST',
    path: '/',
    headers: {}
}

var resData = '';
var req = http.request(opt, function(res) {
    res.on('data', function(chunk) {
        resData += chunk;
    })
    res.on('end', function() {
        console.log(resData);
    })
})

opt.headers['Content-Tyoe'] = 'application/x-www=form-urlencoded';
req.data = "q=actor";
opt.headers['Content-Length'] = req.data.length;

req.on('error', function(err) {
    console.log("error : " + err.message);
})

req.write(req.data);
req.end();