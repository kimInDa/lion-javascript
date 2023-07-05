/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
const empty = null;
console.log(empty); // null
console.log(typeof empty); // object : 언어상 오류 -> null로 체크하려면 유틸리티 코드 만들어서 체크



// 2. 값이 할당되지 않은 상태
let unknown;
console.log(unknown); // undefined



// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const hi = new String('hello'); // 문자 생성자 (constructor의 힘)

const double = 'hello'; // 문자 리터럴
const single = 'hello';
const backtick = `hello ${1 + 3}`;

console.log(typeof hi); // object
console.log(typeof double); // string
// 자료형 생성 방법은 생성자와 리터럴 두가지가 있다. 둘 다 쓰임에 차이는 없다. (함수는 다름.)



// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = new Number(123);

const integer = 123;
const floatingPointNumber = 10.45;

console.log(typeof integer);



// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const big = BigInt(123); // bigInt와 Symbol의 생성자만 new를 붙이지 않는다. 비교적 최근에 나온 애들이기 때문

const bigInteger = 123n;



// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;
console.log(typeof (bool)); // boolean



// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const Obj = new Object({});

const obj = {};

console.log(obj);



// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uid'); // bigInt와 Symbol의 생성자만 new를 붙이지 않는다. 비교적 최근에 나온 애들이기 때문

console.log(typeof unique); // symbol




/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

console.log( typeof 1 + 2 ); // number2
console.log( typeof (1 + 2) ); // number



// 언어 상, 오류
console.log(typeof null); // object : 언어상 오류 -> null로 체크하려면 유틸리티 코드 만들어서 체크




// Object
// 객체 리터럴 방식으로 많이 생성
const user = {
  name: 'tiger',  // 객체의 property
  age: 28,
  sayHi: function(){       // method 메서드 : 객체가 가진 함수
    console.log('hello~');
  }
}

console.log(user);
console.log(user.age); // 28
console.log(user.sayHi()); // hello~




// Array
const newArray = new Array(); // 배열 생성자
const arr = [10, 100, 1000, 1, 2, 3]; // 배열 리터럴


console.log(arr);
console.log(arr[3]); // 1

// css응용 : nth-child는 1부터 시작하므로 + 1을 해준다.
const count = 0;
`li:nth-child(${ count + 1})`




// function
const f = new fishBreadFrame();   // class
 
function fishBreadFrame(재료){     // 일반 function
  return 재료 + '맛 붕어빵';
}

const 붕어빵 = fishBreadFrame('팥');
const 슈크림붕어빵 = fishBreadFrame('슈크림');
const 와사비붕어빵 = fishBreadFrame('와사비');

console.log(붕어빵);
console.log(슈크림붕어빵);
console.log(와사비붕어빵);


// 재료 = parameter = 인자
// return이 없으면 undefined가 반환된다.
// class와 일반 fuction은 큰 차이가 있다.



// this
