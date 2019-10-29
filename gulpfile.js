const { src, dest, series } = require('gulp');

function html() {
    return src('src/*.html')
        .pipe(dest('build'))
}
  
function css() {
    return src('src/*.css')
        .pipe(dest('build'))
}
  
function js() {
    return src('src/*.js')
        .pipe(dest('build'))
}

exports.default = series(html, css, js);