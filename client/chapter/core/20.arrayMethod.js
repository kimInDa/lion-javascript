/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
// typeOf 로는 정확히 배열인지 알 수 없음. typeOf [] : object 로 나옴.

const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';

function nomalIsArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';
}

const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';

function nomalIsNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';
}


/* -------------------------------------------------------------------------- */
/*                                   배열의 능력                                   */
/* -------------------------------------------------------------------------- */


const arr = [10,100,1000,10000];

//📍 수정
const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]


/* 요소 순환 ---------------------------- */

// forEach : ✨값을 반환하지 않음. index도 받을 수 있다.

arr.forEach((item,index)=>{
  // console.log(item, index);
})

people.forEach((item)=>{
  // console.log(item.name);
})

const span = document.querySelectorAll('span');

// 이벤트 처리 할 때 이 방식이 제일 좋은가요 ? no
// 이벤트 걸 요소가 많아지면 부하 과다 발생
// 이벤트 위임 event delegation

span.forEach((item,index)=>{

  item.addEventListener('click',function(){
    // console.log(this,index);
  })

})



/* 원형 파괴 ----------------------------- */
// 원본이 파괴됨을 명확히 알고 있어야 함.

// push
// pop
// unshift
// shift
// reverse

// arr.reverse()
// console.log(arr);

// splice :  멕기이버 칼, 넣고 빼고 추가 제거 까지 다 가능
arr.splice(1,0, 5, 13)
// console.log(arr);

// sort : 완벽한 정렬 ❌
// compare function 사용(내부 알고리즘까지 알 필요는 없다.)
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환 값 == 0 : a와 b의 순서를 바꾸지 않다.
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.

arr.sort((a,b)=>{
  return a - b;
})
// console.log(arr);


/* 새로운 배열 반환 ------------------------ */

const user = ['선범', '효윤', '준석'];

// concat : 배열과 배열을 합쳐준다
// const newArray = arr.concat(user);
// concat 보다 좋은게 spread syntax
const newArray = [ ... arr, ... user, 'javascript', 'css']
// console.log(newArray);


// slice : 필요한 영역만 자르기
const slice = arr.slice(2,5);
// console.log(slice);


// toSorted (2023 출시)
// compare function
const toSorted = arr.toSorted((a,b)=>{
  return b - a;
})

// console.log(toSorted);

// toReversed (2023 출시)
const toReversed = arr.toReversed();
// console.log(toReversed);


// toSpliced (2023 출시)
const toSpliced = arr.toSpliced(2,0,'javascript', 'css', 'react'); // 2번째 부터 0개를 제거하고 그곳에 자료를 끼워 넣어줘
// console.log(toSpliced);


// ✨map
// forEach와 유샤하지만 ✨반환되는 값이 있음
// 배열을 순환하면서 원하는 값만 '새로운 배열'로 내보낸다.

// const job = people.map((item, index)=>{
//   return `<div>${item.profession}</div>`
// })


const job = people.map((item,index)=>{
  return /* html */`
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `
})

// document.body.insertAdjacentHTML('beforeend', job);

// 반복문으로 콤마 없애기
job.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item);
})


// people 자료구조에서 나이만 모아놓은 배열이 필요하다. => 가공처리 나이 -1 내보내고 싶다.

const newAge = people.map(item => item.age -1)

// 리액트 예제
// function render(){
  
//   return (
//     <div>
//       {
//         people.map((item,index)=>`<div>${item.profession}</div>`)
//       }
//     </div>
//   )
// }


/* 요소 포함 여부 확인 ---------------------- */

// indexOf : 해당 값의 순서를 반환.
console.log( arr.indexOf(10));

// lastIndexOf : 해당 값을 뒤에서 부터 찾고, 앞에서 부터의 순서를 반환
console.log( arr.lastIndexOf(10));

// includes : 해당 값이 포함되어 있는지 여부 반환
console.log( arr.includes(1000));


/* 요소 찾기 ------------------------------ */

// find
const find = people.find((item)=>{
  return item.name === '김희소'
})

console.log(find);

// findIndex
const findIndex = people.findIndex((item)=>{
  return item.id === 3
})

console.log(findIndex);



/* 요소 걸러내기 --------------------------- */

// ✨filter : ✨배열을 반환
const filter = people.filter((item)=>{
  return item.id > 2
})

console.log(filter);



/* 요소별 리듀서(reducer) 실행 -------------- */

// ✨reduce
// 초기값을 설정하지 않으면 해당 배열의 첫번째 아이템이 초가값이 된다.
const totalAge = people.reduce((acc,cur)=>{
  return acc + cur.age
},0)

// console.log(totalAge);

const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>` ,'');


document.body.insertAdjacentHTML('beforeend',template);


// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아';

// split : 문자 -> 배열
const stringToArray = str.split(' ');

console.log(stringToArray);

// join : 배열 -> 문자
const arrayToString = stringToArray.join('/');

console.log(arrayToString);