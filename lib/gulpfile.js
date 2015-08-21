// Gulp tasks for Tachyons

// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    basswork = require('gulp-basswork'),
    watch = require('gulp-watch'),
    prefix = require('gulp-autoprefixer'),
    //uncss = require('gulp-uncss'),
    minifyCSS = require('gulp-minify-css'),
    size = require('gulp-size'),
    rename = require('gulp-rename'),
    csslint = require('gulp-csslint'),
    css = require('css'),
    browserSync = require('browser-sync'),
    browserReload = browserSync.reload;

var path = require('path')
var s3 = require('s3')
var version = require('./package.json').version

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

gulp.task('aws', function() {
  function upload() {
    var options = require('./aws.json')
    var params = {
      localFile: path.join(__dirname, './css/tachyons.min.css'),
      s3Params: {
        Bucket: options.bucket, 
        Key: version + '/tachyons.min.css',
        ACL: 'public-read',
      }
    }

    var client = s3.createClient({
      s3Options: {
        accessKeyId: options.key,
        secretAccessKey: options.secret,
      }
    })

    var uploader = client.uploadFile(params)
    uploader.on('error', function(err) {
      console.error("unable to upload:", err.stack)
    })
    uploader.on('progress', function() {
      console.log("progress", uploader.progressMd5Amount, uploader.progressAmount, uploader.progressTotal)
    })
    uploader.on('end', function() {
      console.log("done uploading")
    })

  }

  upload()

});

/*
   DEFAULT TASK

 • Process css then auto-prefixes and lints outputted css
 • Starts a server on port 3000
 • Reloads browsers when you change html or sass files

*/
gulp.task('default', ['css', 'bs-reload', 'browser-sync'], function(){
  gulp.start(['css', 'bs-reload']);
  gulp.watch('src/*', ['css']);
  gulp.watch(['*.html', './**/*.html'], ['bs-reload']);
});



