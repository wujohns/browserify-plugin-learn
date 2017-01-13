/**
 * 用于对类名做hash，采用less插件的形式实现
 * 作为备选方案（很大可能不会使用该方案）
 */
'use strict';

const postcss = require('postcss');
const postcssModules = require('postcss-modules');

class LessPluginScope {
	/**
	 * 初始化
	 */
	constructor (options) {
		this.options = options || {};
	}

	install (less, pluginManager) {
		console.log(less);
	}

	printUsage () {
		// not in using
		console.log("try build a less plugin");
	}

	setOptions (options) {
		// not in using
		this.options = options;
	}
}

LessPluginScope.prototype.minVersion = [2, 0, 0];

module.exports = LessPluginScope;