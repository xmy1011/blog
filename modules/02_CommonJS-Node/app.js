/**
 * 1 定义暴露的模块
 *    module.exports = value;
 *    exports.xxx = value;
 *  2 引入模块
 *    var module = require(模块名或者路径)
 * **/

// 引用模块
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

// let uniq = require('uniq');
let fs = require('fs');

//  使用模块
module1.foo();
module2();
module3.foo();
module3.bar();

// console.log(uniq([1, 2, 3, 3, 4]));

fs.readFile('app.js', function (err, data) {
  console.log(data.toString());
})
