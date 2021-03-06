var gulp = require('gulp');
//压缩css
var mincss = require('gulp-clean-css');
//压缩scss
var sass = require('gulp-scss')
    //压缩js
var minjs = require('gulp-uglify');
//起服务
var server = require('gulp-webserver');
//引入json文件
var bajson = require('./mock/swiper.json');
//引入操作路径的内置模块
var fs = require('fs');
var path = require('path');
var url = require('url');
//压缩scss
gulp.task('duiscss', function() {
        return gulp.src('./src/scss/*.scss')
            .pipe(mincss())
            .pipe(gulp.dest('./src/css'))
    })
    //监听scss
gulp.task('watch', function() {
        return gulp.watch('./src/scss/*.scss', gulp.series('duiscss'));
    })
    //压缩js
gulp.task('duijs', function() {
        return gulp.src("./src/js/*.js")
            .pipe(minjs())
            .pipe(gulp.dest('./src/publit'))
    })
    //起服务
gulp.task('server', function() {
        return gulp.src('src')
            .pipe(server({
                port: 8080, //端口号
                open: true,
                success: function(req, res, next) {
                    var pathname = req.url;
                    if (pathname === "./favicon.ico") {
                        res.end('');
                        return;
                    }
                }
            }))
    })
    //整合任务
gulp.task('dev', gulp.series('duiscss', 'duijs', "server", 'watch'))