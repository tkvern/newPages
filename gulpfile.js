//加载插件
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    del = require('del');

//编译压缩scss文件
gulp.task('styles', function() {
  return sass('scss/templates', { style: 'expanded' })
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest('stylesheets/'))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest('stylesheets/'))
});

//清理编译文件夹
gulp.task('clean', function(cb) {
    del(['stylesheets/'], cb)
});

//gulp默认任务设置
gulp.task('default', ['clean'], function() {
    gulp.start('styles');
});

//监听任务设置
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('scss/**/*.scss', ['styles']);
});