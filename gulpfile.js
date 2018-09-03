var gulp = require('gulp');
//压缩css
var mincss = require('gulp-clean-css');
//压缩scss
var sass = require('gulp-scss')
    //压缩js
var minjs = require('gulp-uglify');
//起服务
var server = require('gulp-webserver');
//压缩scss
gulp.task('duiscss', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})