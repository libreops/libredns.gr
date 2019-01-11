/* global require, exports */

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');

const lintPathsJS = [
    'static/js/*.js',
    'gulpfile.js'
];

const lintPathsCSS = [
    'static/css/*.css'
];

function lint_js() {
    return gulp.src(lintPathsJS)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function lint_css() {
    return gulp.src(lintPathsCSS)
        .pipe(stylelint({
            reporters: [{ formatter: 'string', console: true}]
        }));
}

function assets() {
    const p = require('./package.json');
    const assets = p.assets;
    return gulp.src(assets, {cwd : 'node_modules/**'})
        .pipe(gulp.dest('static/lib'));
}

exports.test = gulp.parallel(lint_css, lint_js);
exports.default = gulp.series(lint_css, lint_js, assets);
