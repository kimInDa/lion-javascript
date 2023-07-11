/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

// JS에서 auth는 2가지 뜻이 있으므로 구분할 것.
// authorization : 권한
// authentication : 인증

authUser= {
  uid: 'user-id-zWdkfs%1231', // uid : 유니크 아이디
  name: 'Inda',
  email: 'pinktail2327@naver.com',
  isSignIn: true,
  permission: 'paid' // free | paid
}



// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log( authUser.uid );
// console.log( authUser.permission );
// console.log( authUser.email );


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log( authUser['uid']);
// console.log( authUser['email']);
// console.log( authUser['name']);


// 계산된 프로퍼티 (computed property)
// class로 객체 만들기 -> 객체 지향
class User{
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
}

const user3 = new User('동혁')

// 함수로 객체 만들기 -> 함수 지향
/* shorthand property (단축 프로퍼티) */
let calculateProperty = 'phone'; // phone | tel

function createUser(
  name,                       
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
  ){
  
  return {
    name,                      // name:name 을 shorthand property로 작성
    email,
    [computedProp] : number
  }
}

const user1 = createUser(
  '진승',
  'victiory@naver.com',
  'tel',
  '010-1234-5678'
  );
const user2 = createUser('희소', 'happyCow@naver.com');



// 프로퍼티 포함 여부 확인
// in문 : key in user1 -> 조상까지 찾는 issue
// Object.property.SIGN = true; -> 찐객체 오염 -> in문은 오염된 조상까지 찾아버리는 issue
// 자신(own)의 속성(property)을 가지고(has)있는지 : hasOwnProperty -> 진짜 자신만 가진 속성 찾기
for(let key in user1){
  if(Object.prototype.hasOwnProperty.call(user1, key)){
    // console.log(key);
  }
}

// 프로퍼티 나열
// key만 모아놓은 배열 만들어주세요
// 1. Object.keys() 사용
let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);


// 2. 함수 만들기
function getProp(object) {
  if(typeof object !== 'object'){
    throw new Error('getProp함수의 매개변수는 객체 타입 이어야 합니다.')
  }
  return Object.keys(object);

}

function getP(object){
  let result = [];

  for(let key in object){
    if(({}).hasOwnProperty.call(object, key)){
      result.push(key)
    }
  }
  return result;
}
// console.log( getP(authUser) );



//          null.비우기       없앰.
// 프로퍼티 제거(remove) or 삭제(delet)
// 제거 = key는 남아있고 값으로 null이 들어감
// 삭제 = 프로퍼티 자체가 사라짐


// authUser.name = null; // : 제거(remove)
// delete authUser.uid;  // : 삭제(delet)
// console.log(authUser);



// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {

  // if(Object.keys(object).length === 0){
  //   return true;
  // }
  
  // return false;


  // return Object.keys(object).length === 0 ? true : false;
  // return getProp(object).length === 0 ? true : false;
  // return !(Object.keys(object).length);

  return getProp(object).length === 0 ? true : false;
}

isEmptyObject(authUser); // false



// 제거 remove 함수 만들기
function removeProperty(object, key){
  
  if(typeof object !== 'object'){
    throw new Error('....');
  }

  if(key === 'all'){
    for(let key in getProp(object)){
      object[key] = null;
    }
    return object;
  }

  object[key] = null;

  return object;
}

// removeProperty(authUser,'all');

// authUser = {
//   name:null;
// }




// 삭제 delete 함수 만들기
function deleteProperty(object, key){

  if(isEmptyObject(object)){
    return;
  }

  delete object[key];
  return object;
}

deleteProperty(authUser,'name') // authUser = {        }





// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = { name, email, authorization, isLogin };

console.log(student);



// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...







/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 구조를 분해해서 할당한다.


let color = ['#ff0000', '#2b00ff', '#00ff2f'];

// let [red, blue, green] = color;
let [,, green] = color;

// let red = color[0];
// let blue = color[1];
// let green = color[2];

// console.log(green);


for(let [key, value] of Object.entries(authUser)){
  console.log(key);
}




/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
// 순서는 상관 없다.

const salaries = {
  권혜미:50,
  이수연:3000,
  강예나:500,
  김태일:700
}
console.log( salaries.권혜미 );


const {권혜미, 이수연, 강예나, 김태일} = salaries;
// const 권혜미 = salaries.권혜미;
console.log(권혜미);


function setElementCss(options){

  // const { 
  //   width:w = 100,
  //   height:h = 10,
  //   overflow = '',
  //   color:c = '#fff'
  // } = options;
  // console.log( w, c);

  const {width, height, overflow, color} = options;
  console.log(width, height);

}

const defaults = {
  overflow: false,
  height: 200,
  width: 100,
  color: 'orange',
}

setElementCss({
  color:'red',
  overflow: true,
  width: 50,
  height: 100,
})

// 배열의 구조 분해 할당 : 순서가 정해져 있다. 변수 이름을 바꿀 수 있다.
// 객체의 구조 분해 할당 : 순서가 정해져있지 않다. 변수의 이름을 바꿀 수 있을까? yes (width:w)
// 기본값을 지정해 줄 수 있다. (height=100)
// 이름 변경 + 기본값(width:w = 100)
