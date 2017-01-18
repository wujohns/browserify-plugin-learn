'use strict';

const _ = require('lodash');
const async = require('async');
const path = require('path');
const less = require('less');
const postcss = require('postcss');
const postcssModules = require('postcss-modules');
const Transform = require('stream').Transform;

class Lmify extends Transform {
    /**
     * init
     * @param {String} filename - the source file's name
     * @param {Object} options - the options from browserify.transform
     * @param {Object} options.lessCompileOption - the less compile options
     */
    constructor (filename, options) {
        super();
        this._filename = filename;
        this._lessCompileOption = _.get(options, 'lessCompileOption', {});
    }

    /**
     * transforming for less file. Currently only support inline style
     * @param {String} chunk - the content of the required file
     * @param {String} enc - encoding of the file
     * @param {Function} callback - callback function 
     */
    _transform (chunk, enc, callback) {
        if (!/\.css$|\.less$/.test(this._filename)) {
            this.push(chunk);
            return callback();
        }

        async.auto({
            // 按照配置编译 less
            compileLess: (callback) => {
                // sourceMapInputFilename
                less.render(chunk.toString(), this._lessCompileOption, callback);
            },
            // 使用 postcss 实现对 css module 的支持
            cssModule: ['compileLess', (results, callback) => {
                // TODO 需要在lessify做细微调整
                const sourceURL = path.relative(process.cwd(), this._filename).replace(/\\/g, '/');
                // const targetCss = JSON.stringify(`${ results.compileLess.css }/*# sourceURL=${ sourceURL } */`);
                const targetCss = JSON.stringify(`${ results.compileLess.css }`);
                const newChunk = `
                    module.exports = ${ JSON.stringify({}) };
                    (function() { 
                        var head = document.getElementsByTagName('head')[0];
                        var style = document.createElement('style');
                        style.type = 'text/css';
                        var css = ${ targetCss };
                        if (style.styleSheet) {
                            style.styleSheet.cssText = css;
                        } else {
                            style.appendChild(document.createTextNode(css));
                        }
                        head.appendChild(style);
                    }())
                `;
                this.push(newChunk);
                return callback();

                // const lessOutput = results.compileLess;
                // const postcssCompileOption = this._getPostcssCompileOption();
                // let postcssJson;
                // postcss([
                //     postcssModules({
                //         getJSON: (cssFileName, json) => {
                //             postcssJson = json;
                //         }
                //     })
                // ])
                // .process(lessOutput.css, postcssCompileOption)
                // .then((processResult) => {
                //     // TODO /*# sourceURL 的添加，可以参考 lessify.js
                //     const sourceURL = path.relative(process.cwd(), this._filename).replace(/\\/g, '/');
                //     const targetCss = JSON.stringify(`${ processResult.css }/*# sourceURL=${ sourceURL } */`);
                //     console.log(targetCss);
                //     const newChunk = `
                //         module.exports = ${ JSON.stringify(postcssJson) };
                //         (function() { 
                //             var head = document.getElementsByTagName('head')[0];
                //             var style = document.createElement('style');
                //             style.type = 'text/css';
                //             var css = ${ targetCss };
                //             if (style.styleSheet) {
                //                 style.styleSheet.cssText = css;
                //             } else {
                //                 style.appendChild(document.createTextNode(css));
                //             }
                //             head.appendChild(style);
                //         }())
                //     `;
                //     this.push(newChunk);
                //     console.log('---------------------------');
                //     console.log(path.relative(process.cwd(), this._filename));
                //     console.log('---------------------------');
                //     return callback();
                // });
            }]
        }, (err, results) => {
            // TODO 支持inline是很容易的，但支持文件单独导出时比较难的（可以参考css-modulesify的方法）
            return callback();
        });
    }

    /**
     * flush which is called after transform finished
     * @param {Function} callback
     */
    _flush (callback) {
        return callback();
    }

    /**
     * transform less compile options to postcss compile options.Main for sourcemap
     * @return {Object} the options for postcss's compiling 
     */
    _getPostcssCompileOption () {
        // TODO 主要是 less 的 soucemap 配置向 postcss 的 soucemap 配置的转换
        return {
            map: {
                inline: true
            }
        };
    }
}

module.exports = Lmify;