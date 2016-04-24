require.config({
　　　　paths: {
　　　　　　"jquery": "http://ossweb-img.qq.com/images/js/jquery/jquery-1.9.1.min",
　　　　　　"superArray": "superArray"
　　　　}
});
require(['jquery','superArray'], function($,superArray){

   function showList(o){
	     var List = [],
	         cut = [],
	         nNotNow = [];


	     if (o.now.length >= 8) {
	        List = superArray.shuffle(o.now.slice(0,8));
	     }else{
	       if (o.now.length > 0) {
	       	var n = superArray.shuffle(o.now);
	        for (var i = n.length - 1; i >= 0; i--) {
	        	List.push(n[i])
	        };
	       }; 
	        nNotNow  = superArray.shuffle(o.notNow);
	        cut = nNotNow.slice(0,8 - o.now.length);
	        for (var i = cut.length - 1; i >= 0; i--) {
	        	List.push(cut[i]);
	        };

	     };
	 	  var Dom = $('.tvshow_list');
	 	  Dom.html('');
	     for (i=0;i<List.length;i++) {
	     	var fourLi = '';
	     	if ( i === 0 || i === 4) { fourLi = 'class="under_li"' };
	     	Dom.append('<li ' + fourLi + '><a href="'+ List[i].url +'" target="_blank" title="'+ List[i].name +'"><img src="'+ List[i].pic +'" width="20" height="20" alt=""><i class="under_bnt ht comm" href="'+ List[i].url +'" target="_blank">'+ List[i].name +'</i></a></li>')
	     };
	};


	//直播排期
	$.getScript('http://apps.game.qq.com/CommArticle/app/reg/gdate.php',function(){
        $.getScript('http://game.gtimg.cn/images/zzlt/cp/a20160112thunder/js/p.js',function(){
			      	 showList(superArray.nowShow({'list':tvShow,'time':json_curdate.slice(11,13)}))
		})
	})


});