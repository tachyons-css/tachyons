// Gulp tasks for Tachyons
// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    basswork = require('gulp-basswork'),
    watch = require('gulp-watch'),
    prefix = require('gulp-autoprefixer'),
    //uncss = require('gulp-uncss'),
    minifyCSS = require('gulp-minify-css'),
    //sass = require('gulp-sass'),
    size = require('gulp-size'),
    rename = require('gulp-rename'),
    csslint = require('gulp-csslint'),
    css = require('css'),
    browserSync = require('browser-sync'),
    browserReload = browserSync.reload,
    gendocss = require('./tasks/generateDocs'),
    stylestats = require('gulp-stylestats');

gulp.task('generateDocs', require('./tasks/generateDocs'));

// Use csslint without box-sizing or compatible vendor prefixes (these
// don't seem to be kept up to date on what to yell about)
gulp.task('csslint', function(){
  gulp.src('./css/tachyons.css')
    .pipe(csslint({
          'compatible-vendor-prefixes': false,
          'box-sizing': false,
          'important': false,
          'known-properties': false
        }))
    .pipe(csslint.reporter());
});

// Task that compiles scss files down to good old css
gulp.task('pre-process', function(){
  gulp.src('./sass/tachyons.scss')
      .pipe(watch(function(files) {
        return files.pipe(sass())
          .pipe(size({gzip: false, showFiles: true, title:'un-prefixed css'}))
          .pipe(size({gzip: true, showFiles: true, title:'un-prefixed gzipped css'}))
          .pipe(prefix())
          .pipe(size({gzip: false, showFiles: true, title:'prefixed css'}))
          .pipe(size({gzip: true, showFiles: true, title:'prefixed css'}))
          .pipe(gulp.dest('css'))
          .pipe(minifyCSS())
          .pipe(rename('tachyons.min.css'))
          .pipe(gulp.dest('./css/'))
          .pipe(size({gzip: false, showFiles: true, title:'minified css'}))
          .pipe(size({gzip: true, showFiles: true, title:'minified css'}))
          .pipe(browserSync.reload({stream:true}));
      }));
});


gulp.task('css', function() {
  gulp.src('./src/tachyons.css')
    .pipe(basswork())
    .pipe(size({gzip: false, showFiles: true, title:'basswork css'}))
    .pipe(size({gzip: true, showFiles: true, title:'basswork gzipped css'}))
    .pipe(gulp.dest('./css'))
    .pipe(minifyCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(size({gzip: false, showFiles: true, title:'basswork minified'}))
    .pipe(size({gzip: true, showFiles: true, title:'basswork minified'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('generateDocs', require('./tasks/generateDocs'));

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('stylestats', function () {
  gulp.src('./css/tachyons.css')
    .pipe(stylestats());
});

// Function to call for reloading browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

/*
   DEFAULT TASK

 • Process sass then auto-prefixes and lints outputted css
 • Starts a server on port 3000
 • Reloads browsers when you change html or sass files

*/
gulp.task('default', ['css', 'bs-reload', 'browser-sync'], function(){
  gulp.start(['css', 'bs-reload']);
  gulp.watch('src/*', ['css']);
  gulp.watch(['*.html', './**/*.html'], ['bs-reload']);
});

