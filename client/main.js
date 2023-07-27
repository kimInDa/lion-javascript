import { deleteStorage, getNode, getStorage, setStorage } from './lib/index.js'

// 로컬스토리지를 활용하여 새로고침 되어도 텍스트필드에 입력한 글자가 계속 남아있을 수 있도록 하기

const textField = getNode('#textField');
const clearButton = getNode('button');

function handleTextField(){
  const value = this.value;

  setStorage('text',value);
}

function init(){
  getStorage('text').then((res)=>{
    textField.value = res;
  })
}

function hadleDelete(){
  deleteStorage()
  textField.value = '';
}

textField.addEventListener('input',handleTextField)
window.addEventListener('DOMContentLoaded',init)
clearButton.addEventListener('click',hadleDelete)