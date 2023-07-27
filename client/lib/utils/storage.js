import { typeError } from '../error/typeError.js';
import { isString } from './typeOf.js';

const {localStorage:storage} = globalThis;


export function setStorage(key,value){

  return new Promise((resolve, reject)=>{
    if(isString(key)){
      resolve()
      storage.setItem(key,JSON.stringify(value));
    }else{
      reject({message:'key는 문자 타입 이어야 합니다.'})
    }
  })

  // if(!isString(key)){
  //   typeError('key는 문자 타입 이어야 합니다.')
  // }
  // storage.setItem(key,JSON.stringify(value));

}

export function getStorage(key){
  return new Promise((resolve, reject) => {
    if(isString(key)){
      resolve(JSON.parse(storage.getItem(key)))
    }else{
      reject({message:'key는 문자 타입 이어야 합니다.'});
    }
  })
}


// setStorage('user',{name:'tiger'});
// console.log( await getStorage('user') );

// 로컬스토리지도 데이터가 무거우면 가져오는데 오래 걸릴 수 있음
// 따라서 프로미스를 써서 사용하는게 좋다.

export function deleteStorage(key){
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  })
}