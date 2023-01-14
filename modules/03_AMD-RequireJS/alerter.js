// alerter.js
//  定义有依赖的模块
define([
  'dataService'
], function (dataService) {
  let name = 'tom';

  function showMsg() {
    console.log(dataService.getMsg() + ',' + name); // hello amd,tom
  }

  return {
    showMsg
  }
});