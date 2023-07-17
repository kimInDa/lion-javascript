/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength : ', stringTotalLength);

// 특정 인덱스의 글자 추출
// 0부터 시작, 공백 포함
let extractCharacter = message[10];
console.log('extractCharacter : ', extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
// let slice = message.slice(1,3); // 1번 부터 3번 앞까지
// let slice = message.slice(8); // 8번 부터 끝까지
let slice = message.slice(8, -1); // 8번 부터 끝 앞까지
console.log('slice : ', slice);

let subString = message.substring(1,3);
console.log('subString : ', subString);

let subStr = message.substr(1,3);
console.log('subStr : ', subStr);


// 문자열 포함 여부 확인
let indexOf = message.indexOf('p'); // 문자열 중에 'p'가 있니
console.log('indexOf : ', indexOf); // -1 = 없다.
// if(message.indexOf('p') > 0) // 조건처리로 활용 가능

let lastIndexOf = message.lastIndexOf('s'); // 's' 몇 번째에 있어? : 찾는건 뒤에서 부터, 순서 표시는 앞에서 부터의 값
console.log('lastIndexOf : ', lastIndexOf); // 6

let includes = message.includes('less'); // 해당 단어에 대한 포함 여부를 확인한다.(대소문자 구분)
console.log('includes : ', includes); // false

let startsWith = message.startsWith('Less'); // 'Less'로 시작해? (대소분자 구분)
console.log('startsWith : ', startsWith); // true

let endsWith = message.endsWith('more.'); // 'more.'로 끝나니? (대소문자 구분)
console.log('endsWith : ', endsWith); // true


// 공백 잘라내기
// Left/Right가 언어에 따라 가로로 기술하는 언어는 문제가 없지만, 아랍어처럼 세로로 기술하는 언어는 왼쪽 오른쪽이라는 개념이 맞지 않아요. 그래서 접근성 관련해서도 방향보다 시작.종료로 구분하는 형태로 바뀌고 있어요.
let trimLeft = message.trimLeft(); // 해당 string의 왼쪽 공백 없애기
console.log('trimLeft : ', trimLeft);

let trimRight = message.trimRight(); // 해당 string의 오른쪽 공백 없애기
console.log('trimRight : ', trimRight);

let str = '       sf a  f      ';

let trim = str.trim(); // 해당 string의 양쪽 공백 없애기
console.log('trim : ', trim);

// 글자 중간 공백 없애기
// 1. split
// console.log(str.split(' ').join(''));

// 2. 정규표현식
console.log(str.replace(/\s*/g,''));

// 2-1. 유틸함수로 만들기
function normalText(string){
  return str.replace(/\s*/g,'')
}
normalText(str);


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ', repeat);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ', toLowerCase);
let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ', toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}
toCamelCase('shining star') // 'shiningStar'

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
toPascalCase('shining star') // 'ShiningStar'