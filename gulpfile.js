const gulp = require('gulp')
const clean = require('gulp-clean')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const { series, parallel } = gulp

sass.compiler = require('node-sass');

const styles = () => {
  return gulp.src('resources/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
}

const scripts = () => {
  return gulp.src('resources/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'))
}

const cleanBuild = () => {
  return gulp.src('public', {read: false})
  .pipe(clean())
})

const images = () => {
  return gulp.src('resources/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
}

const watch = () => {
  gulp.watch('resources/scss/**/*.scss', styles)
  gulp.watch('resources/js/**/*.js', scripts)
}

exports.dev = series(
    // cleanBuild,
    // parallel(html, styles, scripts, images),
    // parallel(watch)
)
