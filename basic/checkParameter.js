console.log('argv 속성의 파라미터 수: ' + process.argv.length);

console.log(process.argv);

if (process.argv.length > 2) {
    console.log('third parameter is: %s', process.argv[2]);
}

process.argv.forEach(function(item, index) {
    console.log(index + ' : ' + item);
})