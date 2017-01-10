// 尝试编写调用 css-modules-loader-core 核心部分
'use strict';

const fs = require('fs');
const path = require('path');
const async = require('async');
const Core = require('css-modules-loader-core');
const DepGraph = require('dependency-graph').DepGraph;

// 作为参考，在使用 DepGraph 替代新语言特性的 trace 后，这个函数并未被调用
const traceKeySorter = (a, b) => {
    if (a.length < b.length) {
        return a < b.substring(0, a.length) ? -1 : 1;
    } else if (a.length > b.length) {
        return a.substring(0, b.length) <= b ? -1 : 1;
    } else {
        return a < b ? -1 : 1;
    }
}

class FileSystemLoader {
    constructor (rootDir, plugins) {
        this.rootDir = rootDir;
        this.sources = {};
        this.importNr = 0;
        this.core = new Core(plugins);
        this.tokensByFile = {};
        this.deps = new DepGraph();
    }

    // TODO 还是得用 promise
    fetch();
}