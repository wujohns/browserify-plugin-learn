/**
 * 用于熟悉 browserify 的 transform 与 plugin 开发的实验
 */
'use strict';

let packageConfig = {
    // 基础说明配置
    name: 'fx-gulp',
    version: '0.0.1',
    author: 'wujohns',
    description: 'browserify plugin develop test',
    private: true,

    engine: {
        node: '>=4.0.0'
    },

    /**
     * 程序运行依赖
     */
    dependencies: {
        'lodash': '^4.14.0',
        'css-modules-loader-core': '^1.0.0',
        'dependency-graph': '^0.4.1',
        'object-assign': '^3.0.0',
        'promise-polyfill': '^2.1.0',
        'resolve': '^1.1.7',
        'string-hash': '^1.1.0',
        'through2': '^2.0.1',
        'less': '^2.2.0'
    },

    /**
     * 开发工具依赖
     */
    devDependencies: {
        // gulp基础包依赖
        'gulp': '~3.9.1',
        'del': '~2.2.2',                // 删除文件

        // browserify包的依赖
        'browserify': '~13.1.1',
        'vinyl-source-stream': '~1.1.0',
        'vinyl-buffer': '~1.0.0',
        'node-lessify': '^0.1.4',
        'css-modulesify': '^0.27.1'
    }
};
let fs = require('fs');
let ws = fs.createWriteStream('./package.json', {
    encoding: 'utf8',
    flags: 'w',
    mode: '666'
});
ws.end(JSON.stringify(packageConfig, null, 2));