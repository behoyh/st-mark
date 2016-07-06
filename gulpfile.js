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
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var gulpIgnore = require('gulp-ignore');

gulp.task('watch', function(){
    gulp.watch('client/src/**/*.js', ['app-scripts']);
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
        .pipe(concat('vendor.min.js'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/dist/js'));
});

gulp.task('app-scripts', function() {
    return gulp.src('client/src/app.js')
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

gulp.task('sass', function () {
    return gulp.src('client/src/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/dist/css'));
});

gulp.task('dev', ['sass', 'bower-vendor', 'app-scripts', 'webserver', 'watch']);
gulp.task('serve', ['sass', 'bower-vendor', 'app-scripts', 'webserver']);