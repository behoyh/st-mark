var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    concatCss = require('gulp-concat-css'),
    stripCssComments = require('gulp-strip-css-comments'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    swPrecache = require('sw-precache');

gulp.task('watch', function(){
    gulp.watch('client/src/**/*.js', ['app-scripts']);
    gulp.watch('client/src/**/*.scss', ['app-sass']); 
});

gulp.task('webserver',
    ['vendor-css', 'app-sass', 'vendor-js', 'app-scripts'], 
    function() {
    return gulp.src('client')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('app-scripts', function() {
    return gulp.src('client/src/app.module.js')
        .pipe(sourcemaps.init())
        .pipe(browserify({
          debug : !gulp.env.production
        }))
        .on('error', gutil.log)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify({ preserveComments: false }))
        .pipe(rename('app.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/dist/js'))
});

gulp.task('app-sass', function() {
    return gulp.src('client/src/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/dist/css'));
});

gulp.task('vendor-js', function() {
    return gulp.src([
            'client/libs/angular/angular.min.js',
            'client/libs/angular-route/angular-route.min.js',
            'client/libs/angular-animate/angular-animate.min.js',
            'client/libs/angular-aria/angular-aria.min.js',
            'client/libs/angular-messages/angular-messages.min.js',
            'client/libs/angular-sanitize/angular-sanitize.min.js',
            'client/libs/angular-material/angular-material.min.js',
            'client/libs/localforage/dist/localForage.min.js',
            'client/libs/angular-localforage/dist/angular-localForage.min.js',
            'client/libs/firebase/firebase.js',
            'client/libs/angularfire/dist/angularfire.min.js'
        ]) 
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.min.js'))
        .pipe(uglify({ preserveComments: false }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/dist/js'));
});

gulp.task('vendor-css', function(){
    return gulp.src([
            'client/libs/angular-material/angular-material.min.css',
        ])
        .pipe(sourcemaps.init())
        .pipe(concatCss('vendor.min.css', { rebaseUrls: false }))
        .pipe(cleanCSS())
        .pipe(stripCssComments({ preserve: false }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/dist/css'));
});

gulp.task('sw-cache', function(){
    return swPrecache.write('client/sw.js', {
        staticFileGlobs: [
            'client/dist/**/*.{js,css}',
            'client/imgs/icons/*.svg',
            'client/index.html'
        ],
        stripPrefix: 'client'
    });
});

gulp.task('dev', ['sw-cache', 'webserver', 'watch']);
gulp.task('serve', ['sw-cache', 'webserver']);