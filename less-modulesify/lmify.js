/**
 * 该 plugin 的 transform 部分
 */
'use strict';

const through = require('through2');
const less = require('less');
const Transform = require('stream').Transform
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
        this._lessString = chunk.toString();
        return callback();
    }

    _flush (callback) {
        less.render(this._lessString, compileOptions, (err, output) => {
            this.push(output.css);
            console.log(output.css);
            return callback();
        });
        return callback();
    }
}

module.exports = Lmify;