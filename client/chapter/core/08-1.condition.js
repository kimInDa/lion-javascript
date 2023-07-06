/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

/*
if("0") {
  console.log('이 조건은 항상 실행됩니다.');
} else{
  console.log('조건에 부합하지 않습니다.');
}
*/

/*
// 문제 :  if..else 구조를 이용해 "자바스크립트의 ‘공식’ 이름은 무엇일까요?"라는 질문을 하는 코드를 작성해 보세요. 사용자가 'ECMAScript’를 입력했다면 ‘정답입니다!’, 아니라면 '모르셨나요? 정답은 ECMAScript입니다!'라는 메시지를 보여주세요.

let result = prompt('자바스크립트의 공식 이름은 무엇일까요?', '').toLowerCase();

if (result === 'ecmascript'){
  console.log('정답입니다!');
} else {
  console.log('모르셨나요? 정답은 ECMAScript입니다!');
}
*/


/*
let value = prompt('숫자 입력하세요.', 0);

if (value > 0) {
  console.log(1);
} else if (value < 0) {
  console.log(-1);
} else {
  console.log(0);
}
*/


// let result = (a + b < 4) ? '미만' : '이상';


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?','');


if(!didWatchMovie){
  
  // 영화 볼거니?
  let goingToWatchMovie = confirm('영화 볼거니?');

  if(goingToWatchMovie){
    let withWho = prompt('누구랑 볼거니?');


    if(withWho === '여자친구'){
      console.log('zzz');
    }else if(withWho === '가족'){
      console.log('화목하네');
    } else {
      console.log('재밌게보구와~~~~');
    }
    
  }

}else{
  let alone = confirm('너 혼자 봤니?');

  if(alone){
    let didCry = confirm('너 울었니..?');

    if(didCry) {
      console.log('너..찌질했네..');
    }else{
      console.log('너 T야?');
    }
  }
}


// if 문(statement)
// if(didWatchMovie === 'yes'){
//   console.log('무슨 영화 봤어?');

// }else if(goingToWatchMovie === 'yes') {
//   console.log('나랑 영화 보러 갈래?');

// }
// else{
//   console.log('그래...');
// }



// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
/* 

function render(node,isActive){

  let template = `
    <div>${isActive ? <b></b> : null }</div>
  ` 

  node.insertAdjecentHTML('beforeend',template);

}

render(body)



조건 부 랜더링 

function Button({color,name,isActive}){
  
  return(
    <div style={ {color} }>
      {isActive ? <b></b> : null}
    </div>
  )
  
}


 */
