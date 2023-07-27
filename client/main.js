

import {
  tiger, 
  delayP,
  getNode as $, 
  renderUserCard,
  changeColor,
  renderSpinner,
  rendderEmptyCard,
  attr,
  clearContents,
} from "./lib/index.js";

// [phase-1]
// 1. tiger 함수를 사용해서 user 데이터를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링
//    - html template을 만든다.
//    - 유저 data 넘겨주기.
//    - insertLast 사용하기.
// 4. 함수 분리 하기
// 5. gsap으로 카드별 색깔, 애니메이션 넣어주기
// 6. 로딩 이미지 넣어주기

// [phase-2]
// 1. 에러가 발생 했을 때
// 2. empty svg를 생성하고 랜더링 해주세요
// 3. 함수 분리

//[phase-3]
// json-server 구성
// data 설계
// get, delete 통신 localhost
// delete => 리랜더링(clear, render)


const userCardInner = $('.user-card-inner');


async function renderUserList(){

  renderSpinner(userCardInner)

  try{

    await delayP() // 실제 코드에선 필요 없으나, 실제 서버와의 통신처럼 딜레이 약간 주기

    gsap.to('.loadingSpinner',{   // 로딩이 끝나면 '부드럽게' 사라지게 : DOM을 지우지 않고 투명도만 없애기 -> 다른 로딩에서 보이는 이슈 발생
      opacity:0,
      onComplete(){
        $('.loadingSpinner').remove()   // 애니메이션이 끝나면 DOM애서 지우기
      }
    })

    // $('.loadingSpinner').remove() // JS가 가진 기능 Node.remove() : 로딩이 끝나면 사라지게 : DOM을 지움

    const response = await tiger.get('http://localhost:3000/users');
    
    const userData = response.data;
  
  
    userData.forEach((item) => renderUserCard(userCardInner,item))  // 어디에 랜더링 할건데? 어떤 데이터를 랜더링 할건데?
  
    changeColor('.user-card')
  
    gsap.to('.user-card',{
      x:0,
      opacity:1,
      stagger:0.1
    })
  }
  catch(err){
    console.log(err);
    rendderEmptyCard(userCardInner)
    // location.href = '404.html // 화면 랜더링 대신 404페이지로 넘기기
  }

}
renderUserList();



// '식제' 버튼을 클릭했을 때 해당 article의 id 값을 가져옴.
  // - 이벤트 위임
  // - button 선택하기 -> 클릭한 대상의 가장 가까운 ... method
  // - attr() , dataset 으로 id 값 가져오기


function handleDelete(e){

  const button = e.target.closest('button');
  const article = e.target.closest('article')
  if(!article || !button) return;

  // const id = article.dataset.index
  const id = attr(article,'data-index').slice(5)

  tiger.delete(`http://localhost:3000/users/${id}`) // 프로미스 객체 반환
  .then(()=>{
    // 컨텐츠 항목 전체 지우기
    clearContents(userCardInner);
    renderUserList();
  })

}

userCardInner.addEventListener('click',handleDelete);







/* then 설계법------------------------------------------------------------------- */
/*
const URL = 'https://jsonplaceholder.typicode.com/users';
fetch(URL) : 데이터 가져오기
fetch.then or await fetch : response 뽑아오기
fetch.then((result)=>{
  result.json()          : response에서 promise 객체 반환 받기
  return result.jason()  : 다음 then에서 받기
}).then((result)=>{
  console.log(result);   : 결과값 도출
})
*/



/*  await 설계법 ----------------------------------------------------------------- */
/*
const response = await fetch(URL);  // response promise가 담긴 객체를 받아서 await으로 response 객체로 만들기

response.json() // response에서 결과 정보들이 담긴 promise 객체 반환 받기
const data = await response.json() // await으로 결과 정보 도출
*/

