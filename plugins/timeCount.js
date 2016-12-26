/**
 * 来自美团 stream 实战篇的 browserify 的训练
 * browserify 的本身结构解析可以参考 stream-learn 的 5pipeline 部分
 */
'use strict';

const Transform = require('stream').Transform;
const timeCount = (b) => {
	// watch 时需要重新打包，整个pipeline会被重建，所以也要重新修改
	b.on('reset', reset);
	reset();

	// todo 可行性实验后设转换为箭头函数
	function reset () {
		let time = null;
		let bytes = 0;
		const transform = Transform({
			transform: function (data, encoding, next) {
				bytes += data.length;
				this.push(data);
				next();
			},
			flush: function () {
				const delta = Date.now() - time;
				console.log(`${ delta }ms, ${ bytes }bytes`);
				this.push(null);
			}
		});

		// 以 record 阶段结束为起始时刻
		b.pipeline.get('record').on('end', () => {
			time = Date.now();
		});

		// 以最后一个阶段 wrap 作为结束时刻
		b.pipeline.get('wrap').push(transform);
	};
};

module.exports = timeCount;