import { getNode, insertLast } from "../dom/index.js";
import { xhrPromise } from "./xhr.js";


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

// 객체 합성 mixin

const defaultOptions = {
  shouldReject:false,
  timeout:1000,
  data:'성공',
  errorMessage:'알 수 없는 오류가 발생했습니다.'
}

export function delayP(options){

  let config = {...defaultOptions}

  if(typeof options === 'number'){
    config.timeout = options;
  }

  if(typeof options === 'object'){
    config = {...defaultOptions, ...options} // 동일한 key가 있으면 뒤의 것(options)이 앞의 것(defaultOptions)을 덮어씀 // 두 객체를 병합
  }

  const {shouldReject, data, errorMessage, timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      
      if(!shouldReject){
        resolve(data)
      }else{
        reject({message:errorMessage});
      }

    }, timeout);
  })
}

delayP({shouldReject:false})
.then((res)=>{
  // console.log(res);
})
.catch(({message})=>{
  alert(message);
})
.finally(()=>{
  // console.log('어쨌든 실행합니다.');
})


// console.log(2);
// console.log(3);



/* async await ----------------------------------------------------- */


async function delayA(){
  return '성공!'
}

const data = await delayA(); // 리턴값이 promise 객체이면 await도 async 바깥에서 쓸 수 있다.
// console.log(data);



// async - 함수가 promise 객체를 반환 하도록, await 사용 할 수 있도록 하는 기능
//       - function 앞에 async를 붙이면 항상 프라미스를 반환한다. return에 다른 값이 있으면 그 값을 '이행 상태'의 프라미스로 감싸 '이행된'프라미스를 반환한다.
// await - 코드의 실행 흐름 제어 (멈춰) : promise에서 값이 떨어지기 전까지 멈춤
//       - result의 값 가져오기(return 된 promise 객체에서 result값 가져오기)

async function 라면끓이기(){


  delayP({data:'물넣기'}).then((res)=>{    // result 값 가져오기 1
    console.log( res );
  })


  const 스프 = await delayP({data:'스프넣기'})  // result 값 가져오기 2
  console.log(스프);

  const 면 = await delayP({data:'면넣기'})
  console.log(면);

  const 계란 = await delayP({data:'계란넣기'})
  console.log(계란);

  const 접시 = await delayP({data:'접시'})
  console.log(접시);
}

// 라면끓이기()


// then 결과 가져오기
// await 결과 가져오기

async function getUserData(){
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/1008')

  // data.then((res)=>{
  //   console.log(res);
  // })

  const pokemon = await data;
  console.log(pokemon.sprites['front_default']);

  insertLast(document.body, `<img src=${pokemon.sprites['front_default']}>`)
}

// getUserData();

// fetch는 await이 두 번 필요함
// let response = await fetch(url, options); -> promise 객체 받아오기
// let result = await response.json(); -> 받아온 promise의 result 값 담기(JSON.parse() 대신 .json() 사용)