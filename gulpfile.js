// Gulp tasks for Tachyons

// Load plugins 
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    prefix = require('gulp-autoprefixer'),
    uncss = require('gulp-uncss'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    rename = require('gulp-rename'),
    csslint = require('gulp-csslint'),
    browserSync = require('browser-sync'),
    browserReload = browserSync.reload;


// Use csslint without box-sizing or compatible vendor prefixes (these
// don't seem to be kept up to date on what to yell about)
gulp.task('csslint', function(){
  gulp.src('./css/i.css')
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
  gulp.src('./sass/i.scss')
      .pipe(watch(function(files) {
        return files.pipe(sass())
          .pipe(size({gzip: false, showFiles: true, title:'un-prefixed uncompressed css'}))
          .pipe(size({gzip: true, showFiles: true, title:'un-prefixed uncompressed css'}))
          .pipe(prefix())
          .pipe(size({gzip: false, showFiles: true, title:'prefixed uncompressed css'}))
          .pipe(size({gzip: true, showFiles: true, title:'prefixed uncompressed css'}))
          .pipe(gulp.dest('css'))
          .pipe(browserSync.reload({stream:true}));
      }));
});

// Minify all css files in the css directory
// Run this in the root directory of the project with `gulp minify-css `
gulp.task('minify-css', function(){
  gulp.src('./css/i.css')
    .pipe(minifyCSS())
    .pipe(rename('i.min.css'))
    .pipe(gulp.dest('./css/'))
    .pipe(size({gzip: true, showFiles: true, title:'minified css'}));
});

// Initialize browser-sync which starts a static server also allows for 
// browsers to reload on filesave
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        }
    });
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
gulp.task('default', ['pre-process', 'minify-css', 'bs-reload', 'browser-sync'], function(){
  gulp.start('pre-process', 'csslint');
  gulp.watch('sass/*.scss', ['pre-process', 'minify-css']);
  gulp.watch('css/i.css', ['bs-reload']);
  gulp.watch('*.html', ['bs-reload']);
});

