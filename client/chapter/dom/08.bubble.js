/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */
// 중첩된 요소에 addEventListener가 걸려있을 때, 가장 안쪽의 요소의 이벤트를 발생시켰을 경우 바깥쪽의 이벤트도 실행되는 것.
// 버블링 방지 : event.stopPropagation()

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');


section.addEventListener('click',()=>{
  console.log('%c section','color:orange');
},true)

article.addEventListener('click',(e)=>{
  // e.stopPropagation()
  console.log('%c article','color:dodgerblue');
},true)

p.addEventListener('click',(e)=>{
  // e.stopPropagation()
  console.log('%c p','color:hotpink');
},true)






/* 캡처링 ----------------------------------------------------------------- */
// handler를 true로 전달하면 발생
// bubbling이 반대 방향으로 발생(뒤의 이벤트를 먼저 발생시킴)
// 잘 안씀