/**
 * 用于对类名做hash，采用less插件的形式实现
 */
'use strict';

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