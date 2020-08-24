const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const shorthand = require('gulp-shorthand')
const autoprefixer = require('gulp-autoprefixer')
const gulpStylelint = require('gulp-stylelint')
var pxtorem = require('gulp-pxtorem')
const sassGlob = require('gulp-sass-glob')

module.exports = function styles() {
  return gulp.src('src/assets/styles/style.scss')
    .pipe(sassGlob())
    .pipe(plumber())
    // .pipe(gulpStylelint({
    //   failAfterError: false,
    //   reporters: [
    //     {
    //       formatter: 'string',
    //       console: true
    //     }
    //   ]
    // }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(shorthand())
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    }))
    .pipe(sourcemaps.write())
    .pipe(pxtorem({
      propList: ["*", "!*border*"],
      selectorBlackList: [/^html$/]
    }))
    .pipe(gulp.dest('build/assets/css'))
}

