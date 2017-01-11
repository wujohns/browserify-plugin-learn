/**
 * 该 plugin 的 transform 部分
 */
'use strict';

const through = require('through2');
const less = require('less');
const LessPluginScope = require('./less-scope');
const lessScope = new LessPluginScope();
const compileOptions = {
    // less编译的配置
    compress: false,
    // plugins: [lessScope]
};

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
    let lessString = "";
    return through.obj(
        // _transform，对单次传输过来的数据的处理
        function (chunk, enc, callback) {
            if (!/\.css$|\.less$/.test(filename)) {
                // 忽略非 css/less 文件
                this.push(chunk);
                return callback();
            }
            lessString += chunk.toString();
            return callback();
        },
        // _flush，在上述的 _transform 工作都结束后的处理
        function (callback) {
            less.render(lessString, compileOptions, (err, output) => {
                console.log(output.css);
                return callback();
            });
        }
    );
};