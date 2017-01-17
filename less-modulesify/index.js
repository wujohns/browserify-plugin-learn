/**
 * 思路：在设定好的less编译完成后，添加适应 css-module 规范的编译
 */
'use strict';

const _ = require('lodash');
const Lmify = require('./lmify');

module.exports = (browserify, options) => {
    const lessCompileOption = _.get(options, 'lessCompileOption', {});  // less 的编译配置（按照less本身的配置去做）
    browserify.transform((filename, options) => {
        return new Lmify(filename, options);
    }, {
        lessCompileOption: lessCompileOption
    });

    // TODO 如果有必要可以在这里添加 browserify 的 pipeline 部分
    return browserify;
};