/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

console.log( first.className ); // getter
// console.log( first.className = 'box second' ); // setter
// console.log( first.className = 'second' ); // setter


// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용 (class 전체를 덮어씀. 기존것은 사라짐)
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add
// remove
// toggle
// contains

first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is-active'); // boolean 값 반환

console.log(first.classList.contains('is-active'));


// - class 전부 지우기 -
// first.className = '';
// attr(first, 'class',' ');


// 유틸함수 만들기(css.js)
addClass('.first', 'hello');




/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange'; // setter
// console.log( first.style.fontSize ); // getter(자바스크립트로 핸들링한 경우에만 가져올 수 있다. DOM이 CSS를 씌우기 전에 가져오기 떄문,  getComputedStyle을 통해 가져오기)

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log( getComputedStyle(first).fontSize ); // getter
console.log( getComputedStyle(first).getPropertyValue('font-size') ); // getter


// 유틸함수 만들기(css.js)

// 객체의 속성에 접근할 때 .표기법은 사용할 수 없다.
// computed property [ ]
// 객체 안에 키 값이 있는지 확인하는 방법 
// in 문


// setCss('.first','color','#fff');
// getCss('.first', 'color');

console.log(css('.first', 'background-color', 'red'));