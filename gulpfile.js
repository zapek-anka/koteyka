const gulp = require('gulp');
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const svgToCss = require('gulp-svg-to-css');

gulp.task('styles', function () {
    gulp.src('resources/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('scripts', function() {
    gulp.src('resources/js/app.js')
        .pipe(babel({
              presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/'))
});

gulp.task('images', function() {
  gulp.src('resources/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/images/'))
});
//
// gulp.task('svg', function() {
//     gulp.src('resources/icon/**/*.svg')
//     .pipe(svgToCss('svg.css'))
//     .pipe(gulp.dest('public/icon/'));
// });

gulp.task('watch', function () {
    gulp.watch('resources/scss/**/*.scss', gulp.parallel('styles'));
    gulp.watch('resources/js/*.js', gulp.parallel('scripts'));
    gulp.watch('resources/images/**/*', gulp.parallel('images'));
    // gulp.watch('resources/icon/**/*.svg', gulp.parallel('svg'));
});

gulp.task('default', gulp.parallel('styles', 'scripts', 'images', 'watch'));
