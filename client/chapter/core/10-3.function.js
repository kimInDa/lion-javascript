/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
//                      rest parameter : 화살표 함수의 arguments. arguments와 다르게 진짜 배열이다.
//                      args, rest, children(리액트) 이라고 표기하는 경우가 많다.
let calcAllMoney = ( a, b, ... args ) => {

  // console.log(args);
  
  // 1. args + forEach 사용
  // let total = 0;
  // args.forEach((item)=>{
  //   total += item;
  // })

  // 2. args + reduce + 일반 함수 사용
  // return args.reduce(function(acc,item){
  //   return acc + item;
  // },0)

  // 3. args + reduce + 화살표 함수 사용
  return args.reduce((acc,item)=> acc + item, 0)

  // return total;
};

const result = calcAllMoney(1000, 500, 200, 2000);
// console.log(result);





// 화살표 함수와 this

// this를 왜 쓰는지
// this를 어떻게 찾는지


// 일반 함수 this : 나를 호출한 대상을 this로 바인딩한다.
// 화살표 함수 this : this를 바인딩 하지 않음(찾지 않음). this 시 내 부모(상위 컨텍스트)를 가져온다.

// 함수 생성 방법 3가지 비교
// 1. 함수 선언문 (일반 함수)
function normalFunction(){
  console.log(this);
}

// 2. 함수 표현식 (일반 함수)
const expressionFuction = function(){
  console.log(this);
}

// 3. 화살표 함수식 (화살표 함수)
// constructor (생성자)를 내장하고 있지 않다. = 진짜 함수의 기능만을 수행하기 위해 탄생 = 가볍고 빠르다.
const arrowFunction = () => {
  console.log(this);
}

// 객체 안에서 this

// 메서드 : 객체 안의 함수
// 객체의 메서드를 정의할때는 화살표 함수보다 일반 함수가 더 좋은거 아닌가요? yes
// 메서드 안에서 함수를 호출할때는 화살표 함수가 더 좋다? yes

const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades:[80,90,100],
  totalGrades:function(){                      
    
    // function sayHi(){           // oo.sayhi()가 아니므로 this는 window. totalGrade가 실행되이어서 그냥 실행이 된 것. 
    //   console.log(this);
    // }

    // const sayHi = ()=>{          // arrow function이면 this는 user가 된다.
    //   console.log(this);
    // }

    // sayHi(); 

    this.grades.forEach((item)=>{
      this.total += item
    })

    console.log(this.total);
  }                                  
}                                    






/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 