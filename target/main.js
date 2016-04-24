'use strict';

var _superArray = require('./superArray');

var showList = function showList() {
	var o = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	var List = [],
	    cut = [],
	    nNotNow = [];
	if (o.now.length >= 8) {
		List = (0, _superArray.shuffleArray)(o.now.slice(0, 8));
	} else {
		if (o.now.length > 0) {
			var n = (0, _superArray.shuffleArray)(o.now);
			for (var i = n.length - 1; i >= 0; i--) {
				List.push(n[i]);
			};
		};
		nNotNow = (0, _superArray.shuffleArray)(o.notNow);
		cut = nNotNow.slice(0, 8 - o.now.length);
		for (var _i = cut.length - 1; _i >= 0; _i--) {
			List.push(cut[_i]);
		};
	};
	var Dom = $('.tvshow_list');
	Dom.html('');
	for (var _i2 = 0; _i2 < List.length; _i2++) {
		var fourLi = '';
		if (_i2 === 0 || _i2 === 4) {
			fourLi = 'class="under_li"';
		};
		Dom.append('\n\t<li ' + fourLi + '>\n\t   <a href="' + List[_i2].url + '" target="_blank" title="' + List[_i2].name + '">\n\t     <img src="' + List[_i2].pic + '" width="20" height="20" alt="' + List[_i2].name + '">\n\t     <i class="under_bnt ht comm" href="' + List[_i2].url + '" target="_blank">' + List[_i2].name + '</i>\n\t   </a>\n\t</li>\n');
	};
};

//直播排期
$.getScript('http://apps.game.qq.com/CommArticle/app/reg/gdate.php', function () {
	$.getScript('http://game.gtimg.cn/images/zzlt/cp/a20160112thunder/js/p.js', function () {
		showList((0, _superArray.nowShow)({ 'list': tvShow, 'time': json_curdate.slice(11, 13) }));
	});
});