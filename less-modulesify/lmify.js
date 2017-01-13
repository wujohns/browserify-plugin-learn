/**
 * 该 plugin 的 transform 部分
 */
'use strict';

const through = require('through2');
const less = require('less');
const path = require('path');
const Transform = require('stream').Transform;

// 完成对 sourcemap 的支持
const currentWorkingDir = process.cwd();
const compileOptions = {
    // less编译的配置
    compress: false,
    // plugins: [lessScope]
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
            const sourceMapTag = `/*# sourceURL=${ path.relative(currentWorkingDir, this._filename).replace(/\\/g, '/') }*/`;
            console.log(sourceMapTag);
            // this.push(output.css + sourceMapTag);
            this.push(output.css);
            return callback();
        });
    }

    _flush (callback) {
        return callback();
    }
}

module.exports = Lmify;