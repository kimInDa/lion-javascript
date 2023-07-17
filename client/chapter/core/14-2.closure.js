function earth(){
  
  let water = true;
  let apple = {
    founder:'Steve Jobs',
    ceo:'Tim Cook',
    product: ['iphone','macbook','macStudio','appleWatch']
  }
  let gravity = 10;

  // 1. 일반함수
  return function (value){
    gravity = value;
    console.log( gravity, water );
    
  }

  // 2. 화살표 함수
/*  
  retun (value) => {
    gravity = value;
  }
*/

}


const ufo = earth()

ufo(5)


// 리액트 응용 예제  + html 📍
const button = document.querySelector('button');


// let isClicked = true; // 전역 오염 ...


function handleClick(){

  let isClicked = true; 

  return ()=>{
    if(isClicked){
      document.body.style.backgroundColor = 'orange';
    }else{
      document.body.style.backgroundColor = 'transparent';
    }
  
    isClicked = !isClicked;
  }
}


button.addEventListener('click',handleClick())




function useState(initValue){
  
  let value = initValue

  function read(){
    return value
  }

  function write(overValue){
    value = overValue
  }

  return [read,write]
}


// setClick()
// const [click,setClick] = useState(true);
