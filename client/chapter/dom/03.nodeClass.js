/* ------------------------------ */
/* DOM Node Class                 */
/* ------------------------------ */

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLSpanElement

/* ------------------------------------------------------------------------ */

// EventTarget – EventTarget가 모든 DOM 노드의 베이스에 있기때문에 DOM 노드에서 '이벤트’를 사용할 수 있습니다.


// Node – getter 역할을 하는 parentNode, nextSibling, childNodes 등의 주요 트리 탐색 기능을 제공합니다. 
//        Text 클래스, Element 클래스, Comment클래스는 Node클래스를 상속받습니다.


// Element – nextElementSibling, children 이나 getElementsByTagName, querySelector 같이 요소 전용 탐색을 도와주는 프로퍼티나 메서드가 이를 기반으로 합니다. 
//           SVGElement, XMLElement, HTMLElement 클래스의 [베이스] 역할을 합니다.


// HTMLElement – HTML 요소 노드의 베이스 역할을 하는 클래스입니다.
//               HTMLInputElement – <input> 요소에 대응하는 클래스
//               HTMLBodyElement – <body> 요소에 대응하는 클래스
//               HTMLAnchorElement – <a> 요소에 대응하는 클래스


/* 노드 정보 ------------------------------------------------------------- */

const first = getNode('.first');

// - nodeType
console.log(first.nodeType === document.ELEMENT_NODE);
console.log(first.nodeType === 1);

// - nodeName (vs. tagName)
console.log( first.nodeName === 'SPAN' ); // 대소문자 구분, 태그가 아니어도 조회됨
console.log( first.tagName === 'SPAN' ); // 대소문자 구분, 태그가 아니면 null이 뜸


/* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------- */

// - innerHTML
// 노드 안의 값을 변경 시킬 수 있다.
// 값을 추가하거나 태그를 추가하는 방식으로 쓰면 위혐!🚫
// 사용자가 script 태그를 변경 시켜 해킹 가능성 존재(XSS 문제점) -> textContent, insert~ 를
// first.innerHTML += '<div>aa</div>';

// * 기존 내용 삭제
// first.innerHTML = '';

// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀
first.innerHTML += '<div>안녕!</div>';

// - textContent

console.log( first.textContent = 'hola!');

// * 요소 내의 텍스트에 접근
// * 태그는 제외하고 오로지 텍스트만 추출 (태그를 건들지 않으므로 innerHTML보다 훨씬 안전)
// getter와 setter 역할 동시에 할 수 있다.


/* hidden -------------------------------------------------------------- */

// - hidden
// * hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능
// * hidden 프로퍼티는 기술적으로 style="display:none"와 동일
// CSS 속성이 우선하여, display=block을 CSS 속성으로 줬다면 hidden은 먹지 않아 사라지지 않음

const h1 = getNode('h1');

h1.hidden = true;

let toggle = false;

// setInterval(()=>{
//   h1.hidden = toggle? false:true;

//   toggle = !toggle;

// }, 100);