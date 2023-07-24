
/* global gsap */

export const shake = gsap.to('form',{
  duration:0.1,
  x:-10,
  repeat:5,
  yoyo:true,
  clearProp:'x',
  paused:true   // 처음에 무조건 한 번 실행되는 것 막기
})