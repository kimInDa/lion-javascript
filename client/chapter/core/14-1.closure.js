/* ------------------- */
/* 클로저(Closures)      */
/* ------------------- */

// ✨함수는 '값'이기 때문에 어디든 전달될 수 있다!


// 클로저 (closure) 란?
// 전역의 오염을 막기 위해
// 값을 기억하기 위해 (가비지 컬렉터 수집 x)
// 함부로 내가 설정한 값을 수정할 수 없게 (특정 함수를 통해서만 접근)

// - JavaScript의 매우 강력한 특성으로 독립적인 변수를 참조하는 함수를 말합니다.
//   즉, 클로저에 정의된 함수는 그것이 작성된 환경을 '기억'합니다.✨

// function sum(a,b){
  // return a+b
// }

// const value = sum();


function first(xValue = 10){
  let x = xValue;


  function second(secondValue = 5){
    let y = secondValue;
    
    return x + y;
  }


  return second   // second를 실행하지 않고 본문 자체를 내보냄✨
}

// currying function
//first()() -> 15  -> 본문으로 나온 second를 받아서 실행. 이렇게는 잘 안쓰고 변수에 담아서 씀 
const value = first(10) // 15 -> second는 first 바깥에 있어도 태어난 환경을 기억해서 변수 x를 사용할 수 있다.(내부함수를 담고 있는 value가 closure이다.) = const value === first()()
value();




function counter(){
  let count = 0;

    // 1. 일반 함수 형태
    function incre(){
      count++;
      return count;
    }

  return incre;
  
  // 2. return 합친 형태
  // return function (){
    //   count++;
    //   return count;
  // }
    
  // 3. 화살표 함수 형태
  // return () => ++count
}

let result = counter(); // incre가 실행되고 끝나는게 아니라 result에 계속 담겨져 있음으로써 가비지컬렉터의 수집 대상이 되지 않는다.(계속 환경을 기억하게 되므로)
                        // let count는 incre = result를 통해서만 접근할 수 있다.
let result2 = counter(); // result2, 3, 4는 각각 별도의 실행 컨텍스트 환경을 갖는다.
let result3 = counter();
let result4 = counter();


  // (응용) 중첩 함수 내보내기📍
  // const a = (b)=>(c)=>(d)=> b+c+d


// (예제) bind 함수 만들기
const bindEvent = (node,type,handler)=>{

  if(typeof node === 'string'){
    node = document.querySelector(node);
  }

  node.addEventListener(type,handler);

  return ()=> node.removeEventListener(type,handler);

}

function handleClick(){
  console.log('hit');
}

const remove = bindEvent('.first','click',handleClick);

setTimeout(() => {

  remove()

}, 3000);



// 모든 함수에는 실행 컨텍스트가 있습니다. 실행 컨텍스트는 해당 함수 내의 변수와 
// 해당 부모 환경에 대한 참조를 의미하는 환경으로 구성됩니다. 상위 환경에 대한 참조는 
// 내부 함수가 작성된 범위 외부 또는 내부에서 호출되는지 여부에 관계없이 상위 범위의 
// 모든 변수를 모든 내부 함수에 사용할 수 있게 합니다.
//
// 따라서 함수가 사실상 환경(해당 환경에 정의된 변수)에 대한 참조를 가지고 있기 때문에 
// 함수가 이 환경(또는 영역(scope))을 "기억"하는 것처럼 보입니다!
//
// 모든 실행 컨텍스트에는 어휘 환경(Lexical Environment)이 있습니다. 
// 이 어휘 환경은 식별자 바인딩(즉, 변수 및 관련 값)을 보유하고 있으며 
// 외부 환경에 대한 참조도 가지고 있습니다.
// 
// 각 환경이 접근 할 수 있는 일련의 식별자를 "범위(Scope)"라고 합니다. 
// 이러한 범위를 "스코프 체인(Scope Chain)"을 통해 계층적 환경 체인에 
// 중첩 할 수 있습니다.


// 어느 시점이든 하나의 실행 컨텍스트만 실행 될 수 있습니다.
// 이것이 JavaScript가 "단일 스레드"인 이유입니다.
// 
// 즉, 한 번에 하나의 명령만 처리 할 수 있습니다. 일반적으로 
// 브라우저는 "스택(Stack)"을 사용하여 이 실행 컨텍스트를 유지 관리합니다. 
// 스택은 LIFO(Last In First Out) 데이터 구조입니다. 

//
// 스택에 푸시(push) 한 마지막 것이 가장 먼저 꺼내집니다. 스택의 
// 맨 위에 요소만 삽입하거나 삭제할 수 있기 때문입니다. 현재 또는 
// "실행 중인" 실행 컨텍스트는 항상 스택의 맨 위에 있는 항목입니다. 
//
// 실행 중인 실행 컨텍스트의 코드가 완전히 평가되면 최상위 항목이 
// 팝(pop) 된 다음 실행 항목이 실행 컨텍스트를 실행하는 것으로 
// 간주됩니다.
//
// 또한 실행 컨텍스트가 실행되고 있다고 해서 다른 실행 컨텍스트를 
// 실행하기 전에 실행이 완료되어야한다는 것을 의미하지는 않습니다. 
// 실행 중인 실행 컨텍스트가 일시 중단되고 다른 실행 컨텍스트가 
// 실행 중인 실행 컨텍스트가되는 경우가 있습니다. 
// 
// 일시중단 된 실행 컨텍스트는 나중에 중단 된 부분을 선택합니다. 
// 한 실행 컨텍스트가 이와 같이 다른 컨텍스트로 대체 될 때마다 
// 새 실행 컨텍스트가 만들어져 스택에 푸시되고 현재 실행 컨텍스트가 됩니다.

// [ 실행 컨텍스트 N + 3  ] ⬅︎ 현재 실행 컨텍스트 
// [ 실행 컨텍스트 N + 2  ] 
// [ 실행 컨텍스트 N + 1  ] 
// [ 실행 컨텍스트 N      ] 
// [ 실행 컨텍스트        ] // 글로벌


