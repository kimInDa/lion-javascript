/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// constructor는 무조건 들어가 있어야 한다.
// class로 객체가 만들어질 때 '따로 호출하지 않아도' constructor는 무조건 최초 1회 실행 된다.
// this는 new Animal을 통해 생성된 const tiger가 된다.

// get과 set 키워드를 사용할 수 있다.
// set 사용법 :  tiget.eat('사료')❌ -> tiger.eat = '사료'

// Animal => tiger => 호돌이

class Animal{

  leg = 4;
  tail = true;
  stomach = [];

  constructor(name){
    this.name = name;
    console.log('최초 1회 실행합니다.');
  }

  set eat(food){
    this.stomach.push(food);
  }

  get eat(){
    return this.stomach
  }
}
// const tiger = new Animal('호돌이')


// class의 확장 extends
// extends의 constructor를 바꾸지 않으면 super는 없어도 된다.

class Tiger extends Animal{

  #prey = '';                           // #을 붙이면 private 요소로 만들어서 외부 사용자가 접근하지 못하게 한다. beom.prey로 접근 불가. Tiger.prey만 가능

  constructor(name,pattern){
    super(name)                         // 부모의 프로퍼티(this.name = name)를 그대로 가져다 쓰겠다. extends에서 constructor를 쓰려면 무조건 super를 써야한다. 안쓸거면 constructor를 아예 쓰지 말아야 함.
    this.pattern = pattern;
  }

  hunt(target){
    this.#prey = target;
    return `${target}에게 조용히 접근한다.`
  }

  attack(){
    return `강력한 발톱 공격으로 ${this.#prey}가 죽었습니다.`
  }

  static sleep(name){                     // static 메서드를 만드는 키워드. class가 가진 능력으로 생성한다. 따라서 beom.sleep('dd')가 아니라 Tiger.sleep('dd')로 실행한다.
    console.log(name + '이 잠을 잔다.');
  }

}

const beom = new Tiger('범', '호랑이무늬');
const hoho = new Tiger('hoho', '호피무늬');


// class 활용 예제(feat.롤)

class Champion {
  q = '';
  w = '';
  d = '';
  f = '';

  constructor(options) {
    this.q = options.qValue;
    this.w = options.wValue;
    this.d = options.dValue;
    this.f = options.fValue;
  }
  pressD() {
    console.log(this.d + '발동!');
  }
  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '점멸',
  fValue: '회복',
});


class Tab extends React.Component{

  render(){
    return (
      <div></div>
    )
  }
}



// 📍버튼 예제 가져오기 + html📍
class Button {

  target = null;
  registerButton = null;
  list = null;
  
  constructor({input,button,renderPlace}){
    
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace)
    this.todoListArray = [];
    this.data;

    this.registerEvent()

    this.target.addEventListener('input',()=>{
      this.data = this.currentInputTodoData;
    })
  }

  get currentInputTodoData(){
    return this.target.value;
  }

  set currentInputTodoData(value){
    this.target.value = value;
  }

  get todoList(){
    return this.todoListArray
  }

  set todoList(value){
    this.todoList.push(value);
  }

  #createList(){
    let template = `
      <li>${this.data}</li>
    `
    return template;
  }

  render(){ 
    this.list.insertAdjacentHTML('beforeend',this.#createList());
    this.target.value = ''
  }
  
  addTodoData(){
    this.todoList = this.data;
  }

  registerEvent(){
    this.registerButton.addEventListener('click',()=>{
      this.addTodoData()
      this.render()
    });
  }

}






const button = new Button({
  input:'#todo',
  button:'.register',
  renderPlace:'.todoList'
});

















































class VirtualDomRoot {
  constructor(rootElement) {
    this.rootElement = rootElement;
  }

  #parseVNode(vNode) {
    const { type, props } = vNode;

    const element = document.createElement(type);

    console.log(props);
    const children = props.children;
    delete props.children;

    Object.entries(props).forEach(([key, value]) => {
      if (key === 'className') {
        element.classList.add(value);
      } else {
        element.setAttribute(key, value);
      }
    });

    children.forEach((child) => {
      if (typeof child === 'string') {
        element.append(child);
      } else {
        element.append(this.#parseVNode(child));
      }
    });

    return element;
  }

  render(vNode) {
    const parsedElements = this.#parseVNode(vNode);
    this.rootElement.append(parsedElements);
  }

  umount() {
    Array.from(this.rootElement.children).forEach((child) => child.remove());
  }
}