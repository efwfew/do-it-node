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
