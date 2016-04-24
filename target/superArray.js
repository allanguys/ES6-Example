"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});
var shuffleArray = exports.shuffleArray = function shuffleArray(arr) {
		var __this = arr;
		var m = __this.length;
		var t = void 0;
		var i = void 0;
		console.log(__this);
		while (m) {
				i = Math.floor(Math.random() * m--);
				t = __this[m];
				__this[m] = __this[i];
				__this[i] = t;
		}
		return __this;
};
var nowShow = exports.nowShow = function nowShow(j) {
		var res = {};
		res.now = [];
		res.notNow = [];
		for (var i = 0; i < j.list.length; i++) {
				if (j.list[i].end - 1 >= j.time && j.list[i].start <= j.time) {
						res.now.push(j.list[i]);
				} else {
						res.notNow.push(j.list[i]);
				}
		};
		return res;
};