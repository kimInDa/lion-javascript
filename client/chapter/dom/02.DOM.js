/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

// Document Object Model
// 문서 자체(body 안의 모든 요소들)에서 접근 가능한 객체

/* 모든 노드에서 사용 */
// - parentNode : $0.parentElement
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
  // $0.children = document.body.children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById : querySelector 보다 성능이 낫다. 하지만 그 차이는 미미함

const message = document.getElementById('message'); // 이렇게 변수 지정하지 않고도 id만으로 가져다 쓸 수 있지만 쓰지 않는 게 좋다!
// const message = document.getElementByClassName('first');

// console.log(message);


// 유틸 함수 만들기 : getNode.js 파일
getNode('.first'); // <span class="first"></span>

const first = getNode('.first');
const span = getNodes('span');

console.log(span);


// - getElementsByTagName
// - getElementsByClassName

// ^ getElement~ 과거의 유물들이라 굳이 사용 안함


// - querySelector
// - querySelectorAll
// const first = document.querySelector('.first'); // css 선택자 모두 올 수 있음
const [firstSpan, secondSpan] = document.querySelectorAll('span');
console.log(first);
console.log(firstSpan, secondSpan);

// - closest
// 가장 인접한 부모 요소를 반환해준다.(자식 ❌, 형제 ❌)
// 이벤트 위임(event delegation)에서 많이 쓰인다.
console.log(first.closest('h1')); 


/* 문서 대상 확인 */
// - matches 
// 값의 여부를 확인한다.(그 값이 들어 있는 게 맞아?)
// 선택자 안에 class | id 를 가지고 있는 대상이 있어?
console.log(first.matches('#message')); // true

// - contains 
// 선택자의 자식들 중에 해당 element가 있어?
console.log(first.contains(secondSpan)); // false

// 클래스를 포함하고 있어?
// node.classList.contains()


