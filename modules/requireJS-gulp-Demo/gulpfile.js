const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
  return gulp.src('src/style/*.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(rename({ suffix: '.min' })) // css前缀加 .min
    .pipe(gulp.dest('dist/style'))
})

// // 配置测试服务器
// gulp.task('devServer', function () {
//   connect.server({
//     root: ['./src'], // 网站根目录
//     port: 38900, // 端口
//     livereload: true,
//   });
// });

// // 启动浏览器打开地址
// gulp.task('open', ['devServer'], function () {
//   gulp.src(__filename).pipe(
//     open({
//       uri: 'http://localhost:38900/login.html'
//     })
//   );
// });