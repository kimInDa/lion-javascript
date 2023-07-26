

const URL = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

export const tiger = async (options) => {

  const {url, ...restOptions}= {
    ...defaultOptions, 
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  const response = await fetch(url,restOptions)
  if(response.ok){
    response.data = await response.json();
  }
  return response;

}

tiger.get = (url, options)=>{
  return tiger({
    url,
    ...options
  })
}

tiger.post = (url,body,options)=>{
  return tiger({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

tiger.delete = (url,options)=>{
  return tiger({
    method: 'DELETE',
    url,
    ...options
  })
}

tiger.put = (url,body,options)=>{
  return tiger({
    method: 'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

/*
fetch(url) : 기본 get 통신 = 프라미스 객체 반환(post,delete,put도 반환함)
-> then 또는 await (async) 로 결과 받을 수 있다.
+ await 역할은
  1) 코드실행흐름제어 - resolve, reject 반환할때까지
  2) result 값 내뱉는 역할

=> 프라미스 객체의 ok! 떨어지면
response.json() 응답을 파싱해 JSON 객체로 변경! -> data 키에 저장

response = await S2(URL) //^ 응답
response.data = await response.json() //^ 응답 -> 파싱
userData = response.data
by 정소이
*/

/*
const response = await fetch('https://pokeapi.co/api/v2/pokemon/30', )
console.log(response); // 정보 x, 통신이 어떻게 이루어졌는지 결과를 반환

// 실제 결과물을 얻는 과정
if (response.ok) {
  const data = await response.json()
  console.log(data);
}

*/

