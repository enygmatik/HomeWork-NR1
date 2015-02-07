 var gulp = require('gulp'),
  	 connect = require('gulp-connect'),
  	 opn = require('opn'),
  	 gulpif = require('gulp-if'),
  	 useref = require('gulp-useref'),
  	 uglify = require('gulp-uglify'),
  	 minifyCSS = require('gulp-minify-css');

// RUN CONNECT LOCAL SERVER
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
  opn('http://localhost:8080/');
});

// html 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
 
 // js 
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});

// css 
gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
}); 

// watch 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  //gulp.watch(['./app/css/*.css'], ['css']);
  //gulp.watch(['./app/js/*.js'], ['js']);
});
 
gulp.task('minify-css', function() {
    gulp.src(['dist/css/*.css'])
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest('dist'))
});

gulp.task('uglify', function() {
  	gulp.src(['dist/js/*.js'])
    	.pipe(uglify())
    	.pipe(gulp.dest('dist/js'))
});


// Building project [Distribution]
gulp.task('dist', function () {
    var assets = useref.assets();
    
    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(gulpif('app/js/*.js', uglify()))
        .pipe(gulpif('app/css/*.css', minifyCSS()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['connect', 'watch']);
