/* 

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/



/* callback ------------------------------------------------------------------- */

// 구조분해 할당 = 알리아스(별칭) 가능, 기본값 가능

export function xhr({
    method = 'GET',
    url ='',
    onSuccess = null,
    onFail = null,
    body = null,
    headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    }
  } = {}) {
// 전달받은 파라미터 값이 없으면 일반 객체로 값을 하겠다.

  const xhr = new XMLHttpRequest();
  xhr.open(method,url); 
  
  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.addEventListener('readystatechange',()=>{   // 비동기
    const {status, readyState, response} = xhr;
    if(readyState === 4){
      if(status >= 200 && status < 400){
        onSuccess(JSON.parse(response))
      }else{
      onFail('실패')
    }
  }
    // console.log(xhr.status);
    // console.log(xhr.readyState);
  })

  xhr.send(JSON.stringify(body));
}




/*
xhr({
  url:'https://jsonplaceholder.typicode.com/users',
  onSuccess:(result)=>{console.log(result);},
  onFail(err){
    console.log(err);
  }, // 객체 축약형: 컨사이스
  body:{
    name:'tiger'
  }
});
*/
/*
xhr(
  'POST', 
  'https://jsonplaceholder.typicode.com/users',
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  },
  {
    name: 'tiger',
    age: 32,
  },
  {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',   // 동일 출처 정책(교차 출처 리소스 공유 CORS) 에러 방지 : 다른 사이트에서도 정보를 가져올 수 있게 하는 것 / 이걸 써도 오류 나는 것은 서버에서 받아주지 않거나 리스폰스가 돌아오지 않는 것이므로 프론트의 손을 떠난것
  }
);
*/


// 1. 자바스크립트의 함수는 객체다. => 함수에도 메서드 정의 가능
// 2. 사용자(협업개발자) 입장 : 쉽게 쓰자.
// 3. 설계자 -> 함수 안에 메서드(객체)를 넣어 버리자 !!
// shorthand property


/**
 * 
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와의 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return server data
 */
xhr.get = (url,onSuccess,onFail)=>{
  // xhr에 전달 해주자!
  xhr({
    url,
    onSuccess,
    onFail
  })
}

xhr.post = (url,body,onSuccess,onFail)=>{
  xhr({
    method:'POST',
    url,
    body,
    onSuccess,
    onFail
  })
}


xhr.put = (url,body,onSuccess,onFail)=>{
  xhr({
    method:'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.delete = (url,onSuccess,onFail)=>{
  xhr({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}

// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (result)=>{
//     console.log(result);
//   },
//   (err)=>{
//     console.log(err);
//   }
// )







// 유저랜더링(data)
