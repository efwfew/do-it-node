function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function (speed) {
    console.log('%d의 속도로 달립니다.', speed)
}

var person01 = new Person("소녀시대", 20);
var person02 = new Person("걸스데이", 23);

console.log(person01.name + '객체의 walk(10)을 호출합니다')
person01.walk(10)


//prototype 을 쓰는 이유가 실제 인스턴스 객체를 만들 때 메모리를 효율적으로 관리할 수 있게 됩니다
//첨에 function XX 만들고나서

//객체로 함수를 넣고 싶을때 저렇게.