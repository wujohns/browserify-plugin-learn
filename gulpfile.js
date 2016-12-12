/**
 * using gulp with browseriy to test the self plugin
 */
'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const bbplugins = require('./bbplugins');

gulp.task('index', () => {
    browserify({
        entries: ['index.js'],
        debug: true
    }).plugin(bbplugins, {a: 'aaa'})
    .bundle()
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./'));
});