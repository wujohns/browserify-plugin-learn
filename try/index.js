/**
 * 对 css-modulesify 进行模仿从而进行学习
 */
'use strict';

const fs = require('fs');
const path = require('path');
const assign = require('object-assign');
const stringHash = require('string-hash');
const through = require('through2');

const ReadableStream = require('stream').Readable;
const Core = require('css-modules-loader-core');
const FileSystemLoader = require('./file-system-loader');
const Cmify = require('./cmify');

// css 中的 class 名称添加短 hash
const generateShorName = (name, filename, css) => {
    const index = css.indexOf(`.${ name }`);
    const numLines = css.substr(0, index).split(/[\r\n]/).length;
    const hash = stringHash(css).toString(36).substr(0, 5);
    return `_${ name }_${ hash }_${ numLines }`;
};

// css 中的 class 名称添加长 hash
const generateLongName = (name, filename) => {
    const sanitisedPath = filename.replace(/\.[^\.\/\\]+$/, '')
        .replace(/[\W_]+/g, '_')
        .replace(/^_|_$/g, '');
    return `_${ sanitisedPath }__${ name }`;
};

// 获取默认 plugins 并使用相关配置（主要是获取Core中的参数，并对Core.scope做设定）
const getDefaultPlugins = () => {
    const scope = Core.scope;
    scope.generateScopedName = generateShorName;
    return [
        Core.values,
        Core.localByDefault,
        Core.extractImports,
        scope
    ];
};

// 用于自定义数据流中的manifest（目前不会用到相关特性）
const normalizeManifestPaths = (tokensByFile, rootDir) => {
    const output = {};
    const rootDirLength = rootDir.length + 1;

    Object.keys(tokensByFile).forEach((filename) => {
        const normalizedFilename = filename.substr(rootDirLength);
        output[normalizedFilename] = tokensByFile[filename];
    });

    return output;
};

const tokensByFile = {};    // 防止重复
const loadersByFile = {};   // 对每个入口设置独立的loader

/**
 * 最终导出的 css-modulesify plugin
 * @param {Object} browserify - browserify 类型的数据流
 = @param {Object} options - 相关配置
 */
module.exports = (browserify, options) => {
    options = options || {};

    /**
     * options.rootDir  --> rootDir
     * options.output   --> cssOutFilename
     * options.json     --> jsonOutFilename
     * options.use      --> plugins
     */
    let rootDir = options.rootDir || browserify._options.basedir;
    rootDir = rootDir ? path.resolve(rootDir) : process.cwd();
    const cssOutFilename = options.output;
    const jsonOutFilename = options.json;
    
    const plugins = options.use || getDefaultPlugins();
    const postcssBefore = options.postcssBefore || [];
    const postcssAfter = options.postcssAfter || [];
    plugins = postcssBefore.concat(plugins).concat(postcssAfter);

    // TOOD line 121 解析其用途并进行剩余部分
};