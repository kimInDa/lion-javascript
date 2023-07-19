/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()" (가독성이 떨어짐 -> 유지보수가 힘들어짐, 이벤트를 하나만 넣을 수 있음 => 따라서 잘 쓰지 않음)
// 2. DOM 프로퍼티 : element.onclick = handler (이벤트를 하나만 걸 수 있음 => 따라서 잘 쓰지 않음)
// 3. (이벤트 추가) 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener
  // 화살표 함수는 제거할 수 없다. 각각 addEventListener와 removeEventListener에 바인딩 되어 서로 다른 함수이기 때문에

const first = getNode('.first');

// 2. DOM 프로퍼티
function handler(){
  // console.log('HTML 속성에서 이벤트를 실행합니다.');
  console.log('DOM 프로프티에서 이벤트를 실행합니다.');
}

// first.onclick = handler;


// 3. 메서드
// function handleClick(){
//   console.log('이벤트 메서드를 호출합니다.');
// }

// click, mousemove, mouseover, mouseout, mousedown, mouseup
// first.addEventListener('click',handleClick);

// const remove = bindEvent('.first', 'click', handleClick);


// setTimeout(()=>{
//   // first.removeEventListener('click',handleClick);
//   remove()
// }, 3000)

// 유틸함수 만들기 (bindEvent.js)




// 이벤트 객체 (event object)
// 이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만듭니다.
// 객체에 이벤트에 관한 상세한 정보를 넣고 핸들러의 인수로 형태를 전달한다.

const ground = getNode('.ground');
const ball = getNode('#ball');



function handleClick(e){
  // console.log(this === e.target);


  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`;

}


ground.addEventListener('click',handleClick);

// mouseover는 부하 발생 위험
// throtlle, debounce 로 부하 조절(보충수업 중급반)
// throtlle : 특정 시간마다 함수가 실행되도록 함
// debounce : 사용자가 마우스를 움직일 땐 함수를 실행하고 있지 않다가 마우스를 멈추면 한 번 실행함(일정 시간 이후에 실행되도록 함)

function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}


function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}


ground.addEventListener('click',handleClick);


// throttle debounce

ground.addEventListener('mousemove',debounce((e)=>{
  let x = e.offsetX;
  let y = e.offsetY;

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `

  insertLast(ground,template)
}));
