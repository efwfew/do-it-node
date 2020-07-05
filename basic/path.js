var path = require('path');

//디렉토리 이름 합치기

var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('document directory: %s', docsDirectory);

//디렉토리 이름과 파일 이름 합치기
var curPath = path.join('users/mike', 'notepad.exe');
console.log('file path: %s', curPath);

//패스에서 디렉터리, 파일이름, 확장자 구별하기

var filename = "users/mike/notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);


console.log('dirctory: %s, filename: %s, extension: %s', dirname, basename, extname);