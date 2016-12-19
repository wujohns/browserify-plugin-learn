/**
 * try to develop self pulgin
 */

'use strict';

const util = require('util');

// pre-ES6 style constructos
const stream = require('stream');
util.inherits(BBify, stream.Transform);
function BBify (filename, opts) {
    if (!(this instanceof BBify)) {
        return new BBify(filename, opts);
    }
    stream.Transform.call(this);

    this.cssExt = /\.css$/;
    this._data = "";
    this._filename = filename;

};

/**
 * _transform is used to accept input and product output.the implementation handles the bytes being written,
 * computes an output, then passes that output off to the readable portion using the readable.push() method
 * @param {Buffer|String} chunk - the original chunk to be transformed
 * @param {String} encoding - if chunk is a string,this is the encoding type,else 'buffer'
 * @param {Function} callback - the callback function(need try with _flush)
 */
BBify.prototype.isCssFile = function (filename) {
    return this.cssExt.test(filename);
};

BBify.prototype._transform = function (chunk, encoding, callback) {
    if (this.isCssFile(this._filename)) {
        this._data += chunk;
        return callback();
    }
    this.push(chunk);
    return callback();
};

BBify.prototype._flush = function (callback) {
    return callback();
};

module.exports = (browserify, options) => {
    console.log('browserify options:');
    console.log(options);
    browserify.transform(BBify, options);
    return browserify;
};