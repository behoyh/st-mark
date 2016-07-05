var gulp = require('gulp');
var webserver = require('gulp-webserver');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var swPrecache = require('sw-precache');

gulp.task('watch', function(){
    gulp.watch('client/src/**/*.js', ['scripts']);
    gulp.watch('client/src/**/*.scss', ['sass']); 
});

gulp.task('webserver', function() {
    swPrecache.write('client/sw.js', {
        staticFileGlobs: [
                'client/imgs/logo.png',
                'client/dist/**/*.{js,css}',
                'client/index.html',
                'client/src/components/app-shell/app-shell.html'
            ]
    });
  
    return gulp.src('client')
        .pipe(webserver({
            https: false,
            livereload: true,
            open: true
        }));
});

gulp.task('scripts', function() {
    return gulp.src('client/src/app.js')
        .pipe(sourcemaps.init())
        .pipe(browserify({
          debug : !gulp.env.production
        }))
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', gutil.log)
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/dist/js'))
});

gulp.task('sass', function () {
    return gulp.src('client/src/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/dist/css'));
});

gulp.task('dev', ['scripts', 'sass', 'webserver', 'watch']);
gulp.task('serve', ['webserver']);