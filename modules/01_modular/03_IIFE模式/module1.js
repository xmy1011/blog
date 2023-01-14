/**
 * 匿名函数自调用（闭包）
 * 作用： 数据是私有的，外部只能通过暴露的方法进行操作
 * */
(function (window) {
  var name = 'luyi';

  function getName() {
    // 没有this ,去词法作用域找。
    console.log(name);
  };

  function getThisName() {
    console.log(this.name);
  };

  window.student = { name, getName, getThisName };

})(global);

console.log(student); // {name:'luyi', getName: f}
student.name = 'xmy'; // 此处的更改不影响模块内部的变量name
console.log(student); // {name:'xmy', getName: f}
student.getName(); // luyi 
student.getThisName(); // xmy