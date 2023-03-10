/**
 * 
 * @author renel
 */

console.log('main.ts 22');

let str: string = 'Hello';
let str1 = "r" // 类型推导

interface IGetObj {
  name: string,
  age: number
}

function test() {
  if (Math.random() > 0.5) {
    return 3
  } else {
    return '2'
  }
}

function de(params: IGetObj) {
  console.log(params.name);
}

de({ name: 'renel', age: 22 });

console.log(str);

console.log(str.slice(0, 2))


// 三斜线指令
console.log("meta", import.meta.env.VITE_PROXY_TARGET)
