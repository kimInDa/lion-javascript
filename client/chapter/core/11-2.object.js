/* ---------------------------------------------------------------------- */
/* Copy object by reference                                               */
/* ---------------------------------------------------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message;

text = '멋쟁이 사자처럼 6기';

let conversationTool = messenger;

// delete conversationTool.name;

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);




// 객체 복사
// 1. for ~ in 문을 사용한 복사
// 얕은 복사
const cloneObject = {};

for(const key in messenger){
  cloneObject[key] = messenger[key];
}

// 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({},messenger); // 빈 객체를 만들고, 그곳에 messenger 객체를 전달하겠다.


// 3. 전개 연산자(...)를 사용한 복사
const spreadObject = {... messenger}; // 🐶꿀

// 4. 객체를 복사해주는 유틸 함수 

// 일반 함수
// function copydObject(object){
//   return Object.assign({},object);
// }

// 화살표 함수
const copydObject = object => Object.assign({},object)


const newObj = copydObject(messenger);






// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

// let combinedCssMap = { ... cssMapA, ... cssMapB};
let combinedCssMap = Object.assign({}, cssMapA, cssMapB)
// 같은 값이 있으면(color)는 뒤의 것이 기존을 덮어써버려서 뒤의 것이 우선한다.
// 따라서 기본값은 앞에, 덮어쓰거나 추가하는 값은 뒤에 쓴다.




// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

let copyedContainerStyles = { ... containerStyles}; // 얕은 복사 : 같은 객체를 가리킨다.


// 1. 깊은 복사 유틸리티 함수 : 재귀함수(나 자신을 내 안에서 다시 호출)
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}

copyedContainerStyles = cloneDeep(containerStyles);


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
