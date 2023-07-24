import { getNode } from "../dom/index.js"

// 메모이제이션(memoization)

const cache = {

    // cube: <div id="cube"></div>

}


const memo = (key,callback) =>{

  if(!callback) return cache[key];
  cache[key] = callback();
  
  if(cache[key]){
    console.warn(`${key}는 이미 캐시된 값이 존재합니다.`)
    return cache[key]
  }

  cache[key] = callback();
  
  console.log(cache);

}


// 객체를 만들어서 key:value 쌍으로 저장
memo('cube',()=> getNode('#cube')) // setter


console.log(memo('cube')); // getter
