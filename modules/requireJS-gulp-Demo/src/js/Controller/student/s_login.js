//  配置依赖的模块路径
require.config({
  paths: {
    jquery: '../../../lib/jquery.min-1.11.3',
    cookie: '../../../lib/js.cookie'
  }
})

//  进行入口处理
require(['jquery', 'cookie'], function ($, Cookies) {
  $(function () {

    $('#submitBtn').on('click', function (e) {
      //  未写表单验证
      var dataArr = [];
      dataArr = $('#login').serializeArray();
      console.log(dataArr)
      console.log('依赖模块加载完毕');
      Cookies.set('Authorization', dataArr[1]);
      Cookies.set('userID', 00001);
      window.location.href = '../src/view/student/s_index.html';
    })
  })
})
//  css 是如何加载进去的？
//  写的js模块是如何调用的？ 事件绑定在元素上，监听点击事件，点击后 执行回调