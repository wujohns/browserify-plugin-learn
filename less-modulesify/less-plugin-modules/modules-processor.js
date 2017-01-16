'use strict';

const postcss = require('postcss');
const postcssModules = require('postcss-modules');

class ModulesProcessor {
    constructor (options) {
        this.options = options || {};
    }

    process (css, extra) {
        // 主要为让 less 的 sourcemap 与 postcss 的 sourcemap 打通，将 postcss 插件转换为 less 插件的定式
        const sourceMap = extra.sourceMap;
        const sourceMapInline, processOptions = {};

        if (sourceMap) {
            processOptions.map = {};
            processOptions.to = sourceMap.getOutputFilename();
            processOptions.from = sourceMap.getOutputFilename();
            sourceMapInline = sourceMap.isInline();
            if (sourceMapInline) {
                processOptions.map.inline = true;
            } else {
                processOptions.map.prev = sourceMap.getExternalSourceMap();
                processOptions.map.annotation = sourceMap.getSourceMapURL();
                processOptions.map.sourcesContent = true;
            }
        }

        const processed = postcss([postcssModules(this.options)]).process(css, processOptions);
        if (sourceMap && !sourceMapInline) {
            sourceMap.setExternalSourceMap(processed.map);
        }

        return processed.css;
    }
}

module.exports = function (less) {
    return ModulesProcessor;
}