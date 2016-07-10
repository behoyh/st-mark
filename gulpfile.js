var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    sourcemaps = require('gulp-sourcemaps'),
    mainBowerFiles = require('main-bower-files'),
    concat = require('gulp-concat'),
    gulpIgnore = require('gulp-ignore'),
    swPrecache = require('sw-precache');

gulp.task('watch', function(){
    gulp.watch('client/src/**/*.js', ['app-scripts']);
    gulp.watch('client/src/**/*.scss', ['sass']); 
});

gulp.task('webserver',
    ['vendor-css', 'sass', 'bower-vendor', 'app-scripts'], 
    function() {
    return gulp.src('client')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('bower-vendor', function() {
    return gulp.src(mainBowerFiles({
            paths: {
                bowerDirectory: 'client/libs',
                bowerrc: './.bowerrc',
                bowerJson: './bower.json'
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(gulpIgnore.include('**/*.js'))
        .pipe(gulpIgnore.exclude([
            '*.min.js'
         ])) // files excluded
        .pipe(concat('vendor.min.js'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/dist/js'));
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
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/dist/js'))
});

gulp.task('sass', function() {
    return gulp.src('client/src/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/dist/css'));
});

gulp.task('vendor-css', function(){
    return gulp.src([
            'client/libs/angular-material/angular-material.min.css'
        ])
        .pipe(sourcemaps.init())
        .pipe(concatCss('vendor.min.css'))
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