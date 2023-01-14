// dataService.js
// 定义没有依赖的模块
define(function () {
  let msg = 'hello amd';
  function getMsg() {
    return msg;
  }
  //  暴露模块
  return { getMsg };

});