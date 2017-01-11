/**
 * 该 plugin 的 transform 部分
 */
'use strict';

const through = require('through2');
const less = require('less');
const compileOptions = {
    // less编译的配置
}

/**
 * 自定义的 browserify 的 less 处理插件
 * @param {String} filename - browserify 进行 transform 时的文件名
 * @param {Object} options - 转换处理的相关配置
 */
module.exports = (filename, options) => {
    /**
     * 考虑事项
     * 1、通过对 filename 的尾缀做校验判定是 less/css 文件
     * 2、对 filename 做查重校验
     * 
     * 补充：在配合 browserify 的 external 属性使用时需要做额外测试
     */
    return through.obj(
        // _transform，对单次传输过来的数据的处理
        function (chunk, enc, callback) {
            console.log('---------------');
            console.log(filename);
            if (!/\.css$|\.less$/.test(filename)) {
                this.push(chunk);
                console.log(chunk.toString());
                return callback();
            }
            return callback();
        },
        // _flush，在上述的 _transform 工作都结束后的处理
        function (callback) {
            return callback();
        }
    );
};