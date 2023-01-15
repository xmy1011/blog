class Cash {
  constructor() {
    this.total = 0;
  }
  add(amount) {
    this.total += amount;
    if (this.total < 0) {
      this.total = 0
    }
  }
  static testStatic() {

  }
}

class Nickles extends Cash {
  add(amount) {
    super.add(amount * 5);
  }
}

const Cash1 = function () {
  this.total = 0;
  function testCash1() {

  }
}

Cash1.prototype = {
  add: function (amount) {
    this.total += amount;
    if (this.total < 0) {
      this.total = 0
    }
  }
}
const Casher = new Cash(); // 构造函数已执行 对象 Casher 中 有 total 变量及值
console.log(Casher, '38'); // Cash { total: 0 }

const Nickle1 = function () {

  Object.assign(this, new Cash1());

  this.add = function (amount) {
    Cash.add.apply(this, amount);
  }
  console.log(this, '47');
}
const casher1 = new Cash1();
console.log(casher1, 50); // { total: 0 }
console.log(Cash1, '51'); // [function: Cash1]
console.log(Cash1.testCash1, '52'); // undefined
console.log(casher1.add, 53); // 可访问 从原型上找
console.log(Cash1.add, '54'); // undefined 不可直接访问构造函数方法
const consumer = new Nickle1();
console.log(Casher.add, 56); // 可访问 （对象访问的）
console.log(Cash.testStatic, 57); // 用 类 可访问类中的静态变量
// consumer.add(7);

/**
 *构造函数中的this new出来之后的对象 构造函数中的变量 或者 方法， 其对象能访问到。
 * this 只 new  
 * **/

/**
 * 定义于 constructor 内的属性和方法，即定义在this上，属于实例属性和方法，否则属于原型属性和方法
  静态方法： 不需要通过实例对象，可以直接通过类来调用的方法，其中的this指向类本身
  静态方法可以被子类继承，子类可以通过 super 对象访问
 * **/

class Person {
  constructor(name) {
    this.name = name
  }

  say() {
    console.log('hello')
  }

  static sit() {
    console.log(this, 'sit', 'Person 的静态方法 sit');
  }
  static doSit() {
    this.sit()
  }
}

class Sub extends Person {
  static nice() {
    return super.doSit()
  }
}

Sub.doSit() // [class Sub extends Person] sit Person 的静态方法 sit
Sub.nice(); // [class Sub extends Person] sit Person 的静态方法 sit

console.log(typeof Person); // function
console.log(Person.prototype.constructor === Person); // true
let jon = new Person()
jon.say(); // hello
console.log(Person); // [class Person]
console.log(Person.say); // undefined 不能直接访问的除非添加static

console.log(Person.doSit());

console.log(jon.hasOwnProperty('name'));  // true
console.log(jon.hasOwnProperty('say'));  // false

class Person2 {
  get name() {
    return 'getter'
  }
  set name(val) {
    console.log('setter' + val)
  }
}

let jon2 = new Person2()
jon2.name = 'jon' // setterjon 调用 set name 方法 
console.log(jon2.name);  // getter