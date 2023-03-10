/**
 * 
 * @author renel
 */
import { forEach } from 'lodash'
import _ from 'lodash'
const obj = _.cloneDeep({ name: 'renel' })
console.log(obj)
console.log('main.ts 22');

const mainArr = [1, 2]

forEach(mainArr, elm => {
  console.log(elm)
})

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

// 跨域测试
fetch('api/').then(data => {
  console.log('data = ', data)
})
