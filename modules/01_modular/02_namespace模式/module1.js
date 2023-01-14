/**
 * 简单对象封装
 * 作用： 减少了全局变量
 * 问题： 不安全 （数据不是私有的， 外部可以直接修改） 
 */

let myModule = {
  data: 'xmy',
  foo() {
    console.log(`foo() ${this.data}`);
  },
  bar() {
    console.log(`bar() ${this.data}`);
  }
}

myModule.foo(); // foo() xmy
myModule.data = 'xmyNew'; // 外部可以直接修改
myModule.foo(); // foo() xmyNew