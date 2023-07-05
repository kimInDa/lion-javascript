/* ---------------------------------------------------------------------- */
/* Comparison Operator                                                    */
/* ---------------------------------------------------------------------- */

const number = [10, -4, 6, 101, -90, 10_000];

// ~ 보다 큼 또는 작음 → boolean
let lessThen = number[0] < number[3]; 
console.log(lessThen); // true

let greaterThen = number[0] > number[1]; 
console.log(greaterThen); // true

// ~ 보다 크거나 작음 또는 같음 → boolean
let lessThenAndEqual = number[4] <= number[1]; // true


let greaterThenAndEqual = number[5] >= number[0]; //true


// 동등(등급이나 정도가 같다) → boolean
let equal = number[0] == number;
console.log('equal : ',equal); // equal :  false

// 다름(같지 않음) → boolean
let inequal = number[2] != number[3];
console.log('inequal : ',inequal); // inequal :  true

// 동일(똑같다) → boolean
let same = number[3] === number[4];

console.log('same : ',same); // same :  false



// 문자 비교
// 사전편집(lexicographical) 순
// 사전 뒤쪽의 문자가 앞쪽의 문자보다 크다고 판단
// 예) 'ㅎ' > 'ㄱ' → true
// 소문자가 대문자보다 크다고 판단
// 예) 'A' > 'a' → false


// 문자 비교 알고리즘(문제 해결을 위한 절차)
// 1. 두 문자열의 첫 글자 비교
// 2. 첫 글자 비교시, 크거나 작음이 판단되면 비교 종료 후 결론 도출
// 3. 첫 글자가 같을 경우, 두 번째 글자 비교
// 4. 두 번째 글자 비교시, 크거나 작음이 판단되면 비교 종료 후 결론 도출
// 5. 두 번째 글자가 같을 경우, 두 번째 글자 비교
// 6. ...
// 7. 비교가 종료되었고, 문자열 길이도 같을 경우 두 문자열은 동일함으로 결론 도출

console.log('Design' <= 'Development'); // true
console.log('디자인' <= '개발'); // false