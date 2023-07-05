/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(typeof String(YEAR)); // 명시적 형 변환
console.log(YEAR + ''); // 암시적 형 변환


// undefined, null
let days = null;
console.log( typeof String(days) );
console.log(null + '');

let undef = undefined;
console.log( typeof String(undef));
console.log(undef + '');



// boolean
let isClicked = true;
console.log(String(isClicked));
console.log(isClicked + '');



/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); // NaN

// null
let bankbook = null;
console.log(Number(bankbook)); // 0

// boolean
let cutie = true;
console.log(Number(cutie)); // 1

// string
let num = '250'; // 숫자형 문자 : 숫자처럼 보이는 문자
console.log(Number(num)); 
console.log(+num); 
console.log(num * 1); 
console.log(num / 1); 

// numeric string
let width = '105.3px';
console.log(Number(width)); // NaN

let w = window.parseFloat(width, 10); // window 생략 가능
console.log(w); // 105.3

let w2 = window.parseInt(width, 10); // window 생략 가능
console.log(w2); // 105

// 주의! parseFloat과 paseInt는 숫자 중간에 문자가 있을 경우, 문자부터 뒤쪽은 다 잘림.




/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log( Boolean(friend) ); // false
console.log( Boolean(bankbook) ); // false
console.log( Boolean(0) ); // false
console.log( Boolean(NaN) ); // false
console.log( Boolean('') ); // false
console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false
console.log( '암시적 형 변환 : ' + !!false ); // 암시적 형 변환 : false
