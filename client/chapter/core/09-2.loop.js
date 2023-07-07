/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */




let i = 0;

do{

  if ( i === 0 ) {
    // console.log('최초실행');
  }else{
    // console.log(`${i}번째 실행`);
  }

  i++;

}while(i <10);







// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단


let repeat = prompt('몇번 반복하시겠습니까?', 0);

do{
  console.log(repeat);

  if( repeat < 0 ) {
    console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
    break;
  }


  repeat--;

}while(repeat);



// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// first = first.nextSibling.nextSibling.nextSibling.nextSibling; 를 do ~ while 문을 사용해서 구현
let first = document.querySelector('.first');

/*do{
  first = first.nextSibling;
}while(first.nodeType !== document.ELEMENT_NODE); // 반복문 멈추는 시점 => 무한 루프

console.log(first);
*/

// 위의 예제를 '재사용 가능한 함수'로 만들기

function next(node){
  do{
    node = node.nextSibling;
  }
  while(node.nodeType !== 1);

  return node;
}

const second = next(first);

console.log(second);

// previousSibling을 사용
// 해당 요소의 이전 노드를 찾는 함수 만들기

function prev(node) {
  do {
    node = node.previousSibling;
  }
  while (node.nodeType !== 1);

  return node;
}

console.log(prev(second));

