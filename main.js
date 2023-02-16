import getType from "./getType";
import random from "./getRandom";

console.log(getType(123)); // [object Number]
console.log(getType(false)); // [object Boolean]
console.log(getType(null)); // [object Null]
console.log(getType({})); // [object Object]
console.log(getType([])); // [object Array]

console.log(random()); // 0 ~ 9 Integer

// 즉시 실행 함수 IIFE (Immediately-Invoked Function Expression) -  익명 함수를 괄호로 감싸기
const fiv = 5;

(function () {
  console.log(fiv * 2); // 10
})();

// 호이스팅(Hoisting): 함수 선언부가 유효 범위(scope) 최상단으로 끌어올려지는 현상 - 함수 표현식이 아닌 함수 선언식으로 구현한다.
double();

function double() {
  console.log(fiv * 2);
}

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 실정된 Interval 함수를 종료

const timer = setTimeout(() => {
  console.log("Kled");
}, 3000); // 3000ms

const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  clearInterval(timer);
});

// 생성자 함수와 this(소속되어 있는 함수가 실행되는 객체 데이터)
const myName = {
  firstName: "Kled",
  lastName: "Yu",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(myName.getFullName());

// this
// 일반 함수는 호출 위치에서 따라 this를 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this를 정의

const kled = {
  name: "Kled",
  normal() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

kled.normal(); // Kled
// kled.arrow()  undefined error

const amy = {
  name: "Amy",
  normal: kled.normal,
  arrow: kled.arrow,
};

amy.normal(); // Amy
// amy.arrow()  undefined error

// 생성자 함수
// function User(name) {
//   this.name = name;
// }

// User.prototype.normal = function () {
//   console.log(this.name);
// };

class User {
  constructor(name) {
    this.name = name;
  }
  normal() {
    console.log(this.name);
  }
}

const hisName = new User("Kled");
hisName.normal();

class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

const myVehicle = new Vehicle("운송수단", 2);
console.log(myVehicle);

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}

const myCar = new Car("GV80", 4, true);
console.log(myCar);
