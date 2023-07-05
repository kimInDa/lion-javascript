/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a; // 10

// 이항 연산자
let binary = a + b; // 1030

// 삼항 연산자 = 연산자'식'이므로 값을 반환한다.
/*let ternary = a === 10 ? true : false; // false*/
let ternary = Math.random() > 0.5 ? 'big' : 'small';

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈P
let subtraction = 10 - 2;

// 산술 연산자: 곱셈
let multiplication = 30 * 2;

// 산술 연산자: 나눗셈
let division = 14 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;

// 산술 연산자: 거듭 제곱
// let power = 2 ** 53 - 1;
let power = Math.pow(2, 53) - 1;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3'; // 27

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6]; // '1,2,34,5,6'
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

const newArray = firstArray.concat(secondArray); // [1, 2, 3, 4, 5, 6] -> 배열의 메서드 사용

// spread syntax 
// = spread operator
// (concat 보다 최신 문법) 
console.log(...firstArray); // 1 2 3 -> 전개 시켜 줌
console.log(...firstArray, ...secondArray); // 1 2 3 4 5 6
console.log([...firstArray, ...secondArray]); // [1, 2, 3, 4, 5, 6]
// -> 배열 뿐만 아니라 객체에서도 사용. 정말 *100 많이 쓰임. 특히 react에서 필수!



// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)



// 선,후 증감 연산자
// ++, --
let counter = 0;
counter++; // 0
counter; // 1
++counter; // 2

for(let i = 0; i < 10;){
  // console.log(i++);
  console.log(++i);

}

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
/*let total = (count % 4) * (count /= 2) + count ** 3; // ?*/

let total = count % 4;
count = count / 2;
let pow = count ** 3;

total = total * count + pow;

console.log(total);  // 135