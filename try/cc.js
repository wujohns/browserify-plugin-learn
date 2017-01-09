'use strict';

const Transform = require('stream').Transform;

class Cmify extends Transform {
    constructor(filename, opts) {
        super();

        this.cssFilePattern = new RegExp(opts.filePattern || '\.css$');
        this._data = '';
        this._filename = filename;
        this._cssOutFilename = opts.output;
    }

    isCssFile (filename) {
        return this.cssFilePattern.test(filename);
    }

    _transform (data, encoding, callback) {
        if (!this.isCssFile(this._filename)) {
            this.push(data);
            return callback();
        }

        this._data += data;
        callback();
    }
}

module.exports = Cmify;