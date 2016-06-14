var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserify = require('gulp-browserify');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', function(){
    gulp.watch('app/js/**/*.js', ['scripts']);
    gulp.watch('app/sass/**/*.scss', ['sass']); 
});

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('scripts', function() {
    return gulp.src('app/js/app.js')
        .pipe(sourcemaps.init())
        .pipe(browserify({
          debug : !gulp.env.production
        }))
        .on('error', gutil.log)
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/build/js'))
});

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/build/css'));
});

gulp.task('default', ['webserver', 'scripts', 'sass', 'watch']);