/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.
// 프로토타입 : 부모에게 접근하는 역할

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 객체에서는 getter와 setter를 제공하는 키워드가 있다. 두 함수의 이름이 같아도 됨.
// 함수처럼 생겼지만 함수처럼 ()로 호출하진 않는다. 객체에 값을 할당하는 것처럼 쓴다. 
// setter 쓰는 법 : animal.eat = '사료'
// getter 쓰는 법 : animal.eat // ['사료']
// 이 때의 setter와 getter는 enumerable(열거 가능)하지 않다.

/*
const animal = {
  legs: 4,
  tail: true,
  stomach:[],
  set eat(food){
    this.stomach.push(food);
  },
  get eat(){
    return this.stomach;
  }
}

const tiger = {
  pattern: '호랑이무늬',
  prey:'',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__: animal,
}

const fox = {
  prey:'',
  __proto__: animal,
}
*/

// fox.__proto__ = animal;
// tiger.__proto__ = animal;






// 생성자 함수 

// 객체를 만드는 방법 : new Object(), 생성자 함수, {}, 일반함수

// JS에서 함수는 두가지 일을 할 수 있다.(양면의 얼굴을 가지고 있다)

// 함수 이름 앞에 대문자로 시작하면 암묵적으로 생상자함수다? 알지?

// 화살표 함수는 생성자 함수가 될 수 없다(constructor가 없기 때문에)

function User(name, age, email){       // 생성자 함수
  this.name = name;
  this.age = age;
  this.email = email;
}

function button(){           // 일반 함수

}

// const a = button(); // 일반 함수

// const b = new Button('버튼'); // 생성자 함수 -> 객체가 담긴다.(생성자는 객체를 생성한다.)

const person = new User('beom', 32, 'abc@gmail.com');




// 생성자 함수 실습

function Animal(){
  this.stomach = [];
  this.legs = 4;
  this.tail = true,
  this.eat = function (food){
    this.stomach.push(food);
  }
  this.printEat = function(food){
    return this.stomach;
  }
}

const tiger = new Animal();

tiger.patter = '호랑이 무늬';

tiger.hunt = function (food){
  this.prey = target,
  console.log(`${target}에게 슬금슬금 접근합니다.`);
}

const cat = new Animal();

cat.say = () => '나야아아아옹';

const fox = new Animal();
const wolf = new Animal();
const dog = new Animal();

// 부모 animal의 능력이 계층을 이루어 들어간게 아니라 나의 능력으로 들어가 있음
// 객체를 공장처럼 찍어내야할 때 생성자 함수를 쓴다.

// 생성자 함수가 보기 힘들어서(대문자로만 구분) ES6에서 함수 기능만 분리한건 arrow function, 생성자 기능만 분리한 건 class.
// 생성자 함수에선 getter와 setter 구분이 안된다.(get과 set 메서드를 쓸 수 없기 떄문에)