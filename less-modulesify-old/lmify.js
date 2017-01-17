/**
 * 该 plugin 的 transform 部分
 */
'use strict';

const through = require('through2');
const less = require('less');
const path = require('path');
const Transform = require('stream').Transform;

// 完成对 sourcemap 的支持
const LessPluginModules = require('./less-plugin-modules');
const modulesPlugin = new LessPluginModules();
const currentWorkingDir = process.cwd();
const compileOptions = {
    // less编译的配置
    compress: false,
    plugins: [modulesPlugin],
    sourceMap: {
        sourceMapFileInline: true
    }
};

class Lmify extends Transform {
    constructor(filename, options) {
        super();
        this._filename = filename;
        this._options = options;
        this._lessString = '';
    }

    _transform (chunk, enc, callback) {
        if (!/\.css$|\.less$/.test(this._filename)) {
            this.push(chunk);
            return callback();
        }
        less.render(chunk.toString(), compileOptions, (err, output) => {
            // this.push(output.css + sourceMapTag);
            // this.push(output.css);
            console.log('--------------------');
            console.log(output);
            console.log('--------------------');
            return callback();
        });
    }

    _flush (callback) {
        return callback();
    }
}

module.exports = Lmify;