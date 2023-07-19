/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

// 동일한 이벤트를 많은 요소에 걸어야 할 때, 부모에게 걸어서 위임받아가게 하는 방식 

/* 클래스를 사용한 위임 ---------------- */

const container = getNode('.container');

function handleDelegation(e) {

  let target = e.target;

  // element.closest('li') : element와 가장 가까운 li를 찾는다.
  let li = target.closest('li');

  if(!li) return;

  
  // let className = attr(target,'class');  // console.log(target.getAttribute('class'));
  // let dataName = attr(target,'data-name') // = target.dataset.name;  // console.log(target.dataset.name);
  let className = attr(li,'class');
  let dataName = attr(li,'data-name') 

  if(className === 'home'){
    console.log('홈 실행!');
  }


  // 클래스 사용한 위임
  // if(className === 'a'){
  //   console.log('A 버튼 클릭!');
  // } 

  // if(className === 'b'){
  //   console.log('B 버튼 클릭!');
  // }

  
  // if(className === 'c'){
  //   console.log('C 버튼 클릭!');
  // }

  
  // if(className === 'd'){
  //   console.log('D 버튼 클릭!');
  // }


  // 속성을 사용한 위임
  // if(dataName === 'A'){
  //   console.log('A 버튼 클릭!');
  // }


  
  
  // console.log(this); // .container
  // console.log(this === e.currentTarget);
  // console.log(e.currentTarget);
  // console.log(e.target);


}

container.addEventListener('click',handleDelegation);


// 화살표 함수에서 this를 찾지 못하면 e.currentTarget 으로 찾는다.
// e.currentTarget : 나를 호출한 대상. 이벤트가 걸린 대상이 타깃이 된다.(일반함수 일 때는 this와 같다.)
// e.target : 마우스로 콕 찍었을 때 마우스가 제일 처음 만나는 대상이 타깃이 된다.(내가 누른 대상)


/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */


// ✅ removeEventListener로 지워줘야 하는 이유
// 스크롤에 따라 가려지는 버튼은 이벤트 제거 해주기
// 이벤트 마다 따로 remove 작성 대신 유틸 함수 만들기 (bindEvent.js)

function bindEvent(node,type,callback) {
  

  node.addEventListener(type,callback);

  return ()=>node.removeEventListner(type,callback)
}

const remove = bindEvent('.first','click',()=>{

})


// target.addEventListener('click',handler) // 생성
// target.removeEventListener('click',handler) // 제거

