// let tupleType : [string, boolean];
// tupleType = [false, 'string'];
// tupleType = ['string', false];
// type Foo = string | number;
export {};
// import { create } from "domain";

// function controlFlowAnalysisWithNever(foo: Foo) {
//   if (typeof foo === "string") {
//     // 这里 foo 被收窄为 string 类型
//   } else if (typeof foo === "number") {
//     // 这里 foo 被收窄为 number 类型
//   } else {
//     // foo 在这里是 never
//     const check: never = foo;
//   }
// }
// function create(o: object | null){

// }
// const test = {};
// create(test); // ok
// create(1); // // not ok
// create('string') // not ok
// create({a: 1}); // OK
// create(['1', '2', '3']) ;// ok 
// create(new Array([4,5, 6])) ;// ok
// create(undefined); // // not ok

// function create2(o: Object){

// }
// create2('test');
// create2({});
// create2({a: 1});
// create2([1,2, 3])

// let arr: number[] = [1, 2, 3, 4];
// let ro: readonly number[] = [3,4,5];
// ro = arr;
// console.log(ro);

// arr  = ro;

//  任意属性
interface Person{
    name: string;
    age?: number;
    [propName: string]:any;
}

const p1: Person = {
    name: 'xmy',
    // testPropName1: '124',
    '123': 123,
    'test': 'streewr'
    // testPropName3: Symbol('123'),
    // testBoolean: false,
};

console.log(p1);
//  交叉类型
 // 合并
    // interface A { x: D; }
    // interface B { x: E; }
    // interface C { x: F; }

    // interface D { d: Boolean; }
    // interface E { e: string; }
    // interface F { f: number; }

    // type ABC = A & B & C;

    // let abc:ABC = {
    //     x: {
    //         d: false,
    //         e: 'class',
    //         f: 5
    //     }
    // }
    // console.log(abc);
    
    // => 合并冲突

    // interface A {
    //     c: string;
    //     d: string;
    // }

    // interface B {
    //     c: number;
    //     e: string
    // }

    // type AB = A & B;

    // let ab:AB = {
    //     d: 'class',
    //     e: 'class',
          
    // }
    // console.log(ab);

//  非空操作符断言
// type NumGenerator = () => number;

// function myFunc(numGenerator: NumGenerator | undefined) {
//   // Object is possibly 'undefined'.(2532)
//   // Cannot invoke an object which is possibly 'undefined'.(2722)
//   const num1 = numGenerator(); // Error
//   const num2 = numGenerator!(); //OK
// }