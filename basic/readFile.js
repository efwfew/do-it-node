var fs = require('fs');

//동기
var data = fs.readFileSync('./package.json', 'utf-8'); 

console.log(data);

//비동기

fs.readFile('./package.json', 'utf-8', function(err, data) {
    console.log(data);
})

