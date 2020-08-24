const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const pugLinter = require('gulp-pug-linter')
const htmlValidator = require('gulp-w3c-html-validator')
const rename = require('gulp-rename')
const bemValidator = require('gulp-html-bem-validator')
const replace = require('gulp-replace');

module.exports = function pug2html() {
  return gulp.src('src/views/pages/**/*.pug')
    .pipe(plumber())
    // .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug())
    // .pipe(htmlValidator())
    // .pipe(bemValidator())
    .pipe(replace('&gt;', ">"))
    .pipe(replace('&lt;', "<"))
    // .pipe(rename(function (path) {
      // Updates the object in-place
      // path.extname = ".php";
    // }))
    .pipe(gulp.dest('build'))
}

