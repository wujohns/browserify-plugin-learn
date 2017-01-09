/**
 * using gulp with browseriy to test the self plugin
 */
'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const lessify = require('node-lessify');

const selfPlugins = require('./plugins');

const timeCount = selfPlugins.timeCount;
const styleCreate = selfPlugins.styleCreate;
const bbplugins = selfPlugins.bbPlugins;

gulp.task('self', () => {
    browserify({
        entries: ['./src/index.js'],
        debug: true
    }).plugin(bbplugins, {a: 'aaa'}).plugin(timeCount)
    .bundle()
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist'));
});

// css-modulesify 开发协同试验
const cssModulesify = require('./try/index');
gulp.task('index', () => {
    browserify({
        entries: ['./src/index.js'],
        debug: true
    })
    .plugin(cssModulesify, {
        rootDir: __dirname,
        output: './dist/main.css',
        json: './dist/main.json',
        generateScopedName: cssModulesify.generateShortName
    })
    .bundle()
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist'));
});

