// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
};

animal.age = 2;
animal.name = "치즈";
delete animal.color;

// 2. 메서드
// -> 값이 함수인 프러퍼티를 말

const person = {
    name:"이유찬",
    // 메서드 선언
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();