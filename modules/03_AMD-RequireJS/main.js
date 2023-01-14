// main.js
(function () {
  require.config({
    baseUrl: 'E:/xmy8856/xmy1011.github.io/modules/03_AMD-RequireJS/',
    paths: {
      alerter: './alerter',
      dataService: './dataService',
    }
  })
  require(['alerter'], function (alerter) {
    alerter.showMsg();
  })
})()