var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', function(){
    gulp.watch(['client/**/**/*.js', '!client/libs'], ['scripts']);
    gulp.watch(['client/**/**/*.scss', '!client/libs'], ['sass']); 
});

gulp.task('webserver', function() {
  gulp.src('client')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('scripts', function() {
    return gulp.src('client/app.js')
        .pipe(sourcemaps.init())
        .pipe(browserify({
          debug : !gulp.env.production
        }))
        .on('error', gutil.log)
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('client'))
});

gulp.task('sass', function () {
    return gulp.src('client/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('client'));
});

gulp.task('default', ['webserver', 'scripts', 'sass', 'watch']);