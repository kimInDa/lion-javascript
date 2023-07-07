/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  /*  hasOwnProperty(){
    return '이게 된다고..?'
  }*/
};

// in문 : 객체 안에 내가 원하는 값(property)이(가) 있어? -> 조상의 것 까지 모두 조회되는 문제 발생

const key = 'creator';
console.log(key in javaScript); // true : javaScript 객체 안에 key 가 있어?
console.log('toString' in javaScript); // true : 조상의 속성까지 다 조회가 되어버리는 문제 발생

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// obj.hasOwnProperty(key) : build 들어갔을 때 문제 발생 가능성이 있다고 경고.
// javaScript 객체 안에 hasOwnProperty 메서드를 만들면 기존 기능을 잃어버리고 내가 정의한 메서드로 기능하는 문제점 발생

const key2 = 'valueOf';
console.log(javaScript.hasOwnProperty(key2)); // false

// 기존과 새롭게 정의한 것 모두 사용하려면 진짜 객체의 힘을 빌려와야함
// Onject.prototype.빌려올기능.call(누가빌릴건지, 기능에 들어갈 인자)
console.log(Object.prototype.hasOwnProperty.call(javaScript, key2)); // false // 정말 javaScript가 가지고 있는 key만 조회(부모는 조회 안함)
// call을 통해 함수, 배열, 숫자, 문자 각 고유의 능력을 서로 빌려쓸 수 있다.
// String.prototype.includes.call(123, 'a'); <- 123.includes('a');

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

Object.prototype.nickName = 'tiger'; // 찐객체에 접근하여 프로퍼티 추가

for (let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    // nickName을 뺀 진짜 내가 가진 것만 가져오기
    // Object.prototype 을 {} 또는 ({}) 로 대신 쓸 수 있다.
    console.log(key);
  }
}

// - 배열 객체 순환에 사용할 경우?
const tens = [10, 100, 1000, 10000];

for(let key in tens){
  console.log(tens[key]);
}

// for ... in 객체를 순환하는 용도로 사용이 가능함.
// 배열은..좀 그래요.. for ... in은 객체에 양보하세요..
