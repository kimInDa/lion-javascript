/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;

// setTimeout
// 일정 시간 후에 코드 실행. 비동기(코드 실행 흐름을 강제로 바꿀 수 있다.)
// console.log(1);

const timer = setTimeout(()=>{
  // console.log('몇초 뒤에 해당 코드가 작동합니다.');
  // console.log(2);
},5000);

// console.log(3);

clearTimeout(timer); // setTimeout이 샐행 되기 전에 취소시킴


// setInterval
const cancelInterval = setInterval(()=>{
  // console.log('이 코드는 1초마다 실행되는 코드 입니다.');
}, 1000)

clearInterval(cancelInterval); // setInterval을 중지 시킴

// 응용
// callback, debounce
const cancelInterval2 = setInterval(()=>{
  // console.log('이 코드는 1초마다 실행되는 코드 입니다.');
}, 1000)

const timer2 = setTimeout(()=>{
  // console.log('몇초 뒤에 해당 코드가 작동합니다.');
  // console.log(2);
  clearInterval(cancelInterval2);
},3000);



/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title
// window 안의 location이라는 객체가 가지고 있는 능력들

const { href, protocol, host, port, search, hash, replace, reload } = location;
// window.location.~ 으로 접근해야함
// window 생략 가능 : location.host

// href
// window.locaiton.href = '' : 주소를 넣으면 setter, 안넣으면 getter

// http : 프로토콜 (protocol)
// http://localhost : 호스트 (host)
// http://localhost:5500 : 포트넘버 (port) : 우리가 사용하는 포트넘버를 조회할 수 있다. -> 네트워크 개발자 영역. 네트워크 개발자가 정해둔 포트번호를 써야함
// http://localhost:5500/index.html : 경로명 (pathname)
// http://localhost:5500/index.html?type=listing&page=2 : 서치 (search) : 나중에 urlParams로 가져와서 쓴다.
// http://localhost:5500/index.html?type=listing&page=2#title : 해시 (hash)

const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
  console.log(key, value);
}

// replace : 원하는 주소로 이동시켜 준다.
// location.replace('https://www.naver.com');
// href는 뒤로가기가 되고, replace는 뒤로가기가 안된다.

// reload : 새로고침



/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;

// platform : 브라우저가 실행되는 플랫폼 정보(환경)를 반환
// userAgent : 브라우저와 운영체제 정보를 반환

// console.log(userAgent.toLowerCase().indexOf('chrome') > -1);

// if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ){
  
// }

function browserName() {
  const agent = userAgent.toLowerCase();
  let browserName;
  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS edge';
      break;
    case agent.indexOf('opr') > -1:
      browserName = 'Opera';
      break;
    case agent.indexOf('chrome') > -1:
      browserName = 'Chrome';
      break;
    case agent.indexOf('trident') > -1:
      browserName = '🤬IE ?';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Mozilla Firefox';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;

    default:
      browserName = 'other';
      break;
  }
  return browserName;
}

browserName();

// language : 브라우저에서 사용되는 언어를 반환
// onLine : 브라우저가 온라인인지 여부를 반환
// geolocation : 위치를 반환 

geolocation.getCurrentPosition((data)=>{
  console.log(data.coords.latitude);
  console.log(data.coords.longitude);
})

// geolocation.getCurrentPosition() 은 비동기로 작동하기 때문에 함수 종료 이후 반환 되는 경우가 있음 -> promise 사용
function getLocationPosition(){

  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition((data)=>{

      if(!data){
        reject({message:'위치 서비스를 활성화 해주세요.'})
      }else{
        const {latitude,longitude} = data.coords;
        console.log(2);
        resolve({latitude,longitude})
      }
    })
  })
}


/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

// height : 모니터 사이즈(높이)
// availHeight : 브라우저의 크기(주소창, 메뉴창 다 포함)
// window.innerHeight : 브라우저 해상도 크기(브라우저 내부 화면 크기)(= CSS의 100vh 와 같음) (screen 객체가 아닌 window의 객체) -> 가장 많이 씀
// orientation.type
  // landscape : 가로 방향 , portrait : 세로 방향
  // primary : 순방향, secondary: 역방향





/* History 객체 ---------------------------------------------------------- */
// 방문 내역 관리

const { back, forward, go, length, pushState, replaceState } = history;

// history.back() : 뒤로 가기
// history.go(2) : 앞으로 얼마나 갈건지
// history.go(-2) : 뒤로 얼마나 갈건지

// nextJS에서 많이 만지게 되는 기능들
// ssr
// csr



// navigator.mediaDevices.getUserMedia({video:true}) // 비디오 접근 권한 요청

// navigator.mediaDevices.getUserMedia({video:true});

navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
  
  document.querySelector('#videoElement').srcObject = stream;
  
})
