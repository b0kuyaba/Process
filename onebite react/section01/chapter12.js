// 1. 함수 표현식
function funcA() {
    console.log("funcA");
}

let varA = funA();

let varB = function () {
    console.log("funcB");
};

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
};