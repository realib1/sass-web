const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

buildSass = () => {
    return src('./shero-sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('css'))
}


watchSass = () => {
    watch(['./shero-sass/**/*.scss', '*.html'], buildSass)
}

exports.default = series(buildSass, watchSass)