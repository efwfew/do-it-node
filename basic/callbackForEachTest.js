//moduel.exports
calc = {};

calc.add = function(text, number) {
    return text + number;
}

console.log(calc.add(12, 42));

//자료형 type 알아내기
var a = 10

console.log(typeof(a))

//배열에 함수추가
var Person = {};

var oper = function (a, b) {
    return a+b;
}

Person['add'] = oper;

console.log(Person.add(10,10));

//forEach 알기
var Users = [{name:'소녀시대', age:20}, {name:'티아라', age:22}, {name:'걸스데이', age:25}];

Users.forEach(function(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
})

//result - forEach 1 parameter = 배열의 요소, 2 parameter = index 값, 3 parameter = 배열 전체, 4 parameter = 없음

// { name: '소녀시대', age: 20 }
// 0
// [ { name: '소녀시대', age: 20 },
//   { name: '티아라', age: 22 },
//   { name: '걸스데이', age: 25 } ]
// { name: '티아라', age: 22 }
// 1
// [ { name: '소녀시대', age: 20 },
//   { name: '티아라', age: 22 },
//   { name: '걸스데이', age: 25 } ]
// { name: '걸스데이', age: 25 }
// 2
// [ { name: '소녀시대', age: 20 },
//   { name: '티아라', age: 22 },
//   { name: '걸스데이', age: 25 } ]


//콜백함수
function add1 (a, b, callback) {
    var result =  a + b;
    callback(result);
}

add1(10, 10, function(result) {
    console.log('callback is called');
    console.log('result is ' + result);
})