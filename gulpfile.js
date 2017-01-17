/**
 * using gulp with browseriy to test the self plugin
 */
'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

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
const cssModulesify = require('css-modulesify');
gulp.task('index', () => {
    browserify({
        entries: ['./src/index.js'],
        debug: true
    })
    .plugin(cssModulesify, {
        rootDir: __dirname,
        // output: './dist/main.css',
        inline: true,
        // json: './dist/main.json',
        generateScopedName: cssModulesify.generateShortName
    })
    .bundle()
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist'));
});

const lessify = require('./plugins/lessify');
gulp.task('less', () => {
    browserify({
        entries: ['./src/index.js'],
        debug: true
    }).transform(lessify, {})
    .bundle()
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist'));
});

// TODO 对 sourcemap 支持进行验证
const lessModulesify = require('./less-modulesify');
const sourcemaps = require('gulp-sourcemaps');
gulp.task('lessm', () => {
    browserify({
        entries: ['./src/index.js'],
        debug: true
    })
    .plugin(lessModulesify, {
        lessCompileOption: {
            sourceMap: {
                sourceMapFileInline: true
            }
        }
    })
    // .plugin(cssModulesify, {
    //     rootDir: __dirname,
    //     output: './dist/main.css',
    //     // inline: true,
    //     // json: './dist/main.json',
    //     generateScopedName: cssModulesify.generateShortName
    // })
    .bundle()
    .pipe(source('./dist/bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});