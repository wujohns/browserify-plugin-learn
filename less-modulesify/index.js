/**
 * TODO need write a less-scope
 */

'use strict';

const _ = require('lodash');
const Lmify = require('./lmify');

module.exports = (browserify, options) => {
    /**
     * TODO 将传入的 options 划分为 transform 与 pipeline 两部分：
     * 1、transform 部分配置用于 browserify.transform 的 option 属性
     * 2、pipeline 部分用于 hack browserify 的 pipeline 结构时使用
     *
     * 备注：尽量保证参数 key 一致避免分歧
     */
    const transformOpts = _.pick(options, []);
    const pipelineOpts = _.pick(options, []);
    browserify.transform((filename, options) => {
        return new Lmify(filename, options);
    }, transformOpts);

    // TODO browserify 的 pipeline 处理部分
    return browserify;
};