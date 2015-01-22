var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    uncss = require('gulp-uncss'),
    minifyCSS = require('gulp-minify-css');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('min-js', function () {
        gulp.src(['js/Validation.js', 'js/common.js', 'js/contact_me.js'])
            .pipe(uglify())
            .pipe(gulp.dest('out/js'))
});

gulp.task('concat-js', function () {
    gulp.src(['js/jquery-2.1.1.min.js','js/handlebars.min.js','js/jquery.waypoints.min.js','js/bootstrap.minFULL.js', 'out/js/Validation.js', 'out/js/common.js', 'out/js/contact_me.js'])
        .pipe(concat('core.js'))
        .pipe(gulp.dest('out/js'))
});


gulp.task('minify-css', function() {
    gulp.src(['out/css/bundle.css'])
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(gulp.dest('out/css'))
});

gulp.task('uncss', function() {
    return gulp.src('css/bootstrap.css')
        .pipe(uncss({
            html: ['index.html'],
            ignore: ['@font-face', '@import', '.img-responsive', '.col-md-6', '.close', '.alert-danger', '.alert-success', '.help-block', '.text-danger', '.form-group', '.controls',
                '.modal-footer', '.col-sm-5', '.col-sm-7', '.col-md-12', '.col-md-6', '.col-md-7', '.col-md-5', '.col-md-6', '.col-xs-6','.col-xs-12', '.modal-title', '.modal-body', '.modal-header', '.modal-content',
                '.modal-dialog', '.modal-footer-button', '.button-prim', '.button-project-link', '.button-cls', '.modal-desc-box', '.modal-img-box',
                '.floating-label-form-group', '.portfolio-modal', '.item_404', '.img-thumbnail', '.col-sm-4', 'a, a:hover, a:focus, a:active, a.active',
                '.tab-content > .tab-pane', '#portfolio .portfolio-item .portfolio-link .caption', '.modal', '.floating-label-form-group-with-focus',
                '.collapse', '.navbar-collapse', '.collapsing', '.collapse.in']
        }))
        .pipe(gulp.dest('out/css'))
});

gulp.task('watch', function(){
    gulp.watch('js/*.js', ['min-js', 'concat-js'])
});
