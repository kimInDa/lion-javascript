import { getNode } from "../dom/index.js";


function delay(callback,timeout=1000){
  setTimeout(callback,timeout);
}

const first = getNode('.first');
const second = getNode('.second');






// callback hell..
/*
delay(()=>{  
  console.log(1);
  first.style.top = '-100px';

  delay(()=>{
    console.log(2);
    first.style.transform = 'rotate(360deg)';

    delay(()=>{
      console.log(3);
      first.style.top = '0px';
      second.style.top = '0px';
    })

    second.style.top = '100px';
    console.log('b');
  })
})
*/

/*
function delayP(shouldReject){
  
  // 성공이야? (약속해 알려주기로) 그러고 나서(then) 이거 해 
  // 실패야? (약속해 알려주기로) 그러고 나서(then) 이거 해 

  return new Promise((성공,실패)=>{
  
    setTimeout(() => {
      if(shouldReject){
        성공('통신 성공');
      }else{
        실패('통신 실패!!')    
      }
    }, 5000);
  })
}

// promise object

delayP(true)
.then((결과)=>{
  console.log(결과);
})
*/


// delayP 함수를 실행하면 리턴되는 값이 promise 객체입니다.
function delayP(){

  // 성공이야? (약속해 알려주기로 ) 그러고 나서(then) 이거 해
  // 실패야? (약속해 알려주기로 ) 그러고 나서(then) 이거 해


  return new Promise((resolve, reject) => {
    resolve('성공입니다!!')
  })

}

delayP()
.then((result)=>{
  console.log(result);
})
