 import { shuffleArray, nowShow }  from './superArray';

  const  showList =  function (o = []){
	     let List = [],
	         cut = [],
	         nNotNow = []
	     if (o.now.length >= 8) {
	        List = shuffleArray(o.now.slice(0,8));
	     }else{
	       if (o.now.length > 0) {
	       	let n = shuffleArray(o.now);
	        for (let i = n.length - 1; i >= 0; i--) {
	        	List.push(n[i]);
	        };
	       }; 
	        nNotNow  = shuffleArray(o.notNow);
	        cut = nNotNow.slice(0,8 - o.now.length);
	        for (let i = cut.length - 1; i >= 0; i--) {
	        	List.push(cut[i]);
	        };

	     };
	 	  let Dom = $('.tvshow_list');
	 	  Dom.html('');
	     for (let i=0;i<List.length;i++) {
	     	let fourLi = '';
	     	if ( i === 0 || i === 4) { fourLi = 'class="under_li"' };
	     	Dom.append(`
	<li ${fourLi}>
	   <a href="${List[i].url}" target="_blank" title="${List[i].name}">
	     <img src="${List[i].pic}" width="20" height="20" alt="${List[i].name}">
	     <i class="under_bnt ht comm" href="${List[i].url}" target="_blank">${List[i].name}</i>
	   </a>
	</li>
`);
};
	};


	//直播排期
	$.getScript('http://apps.game.qq.com/CommArticle/app/reg/gdate.php',function(){
        $.getScript('http://game.gtimg.cn/images/zzlt/cp/a20160112thunder/js/p.js',function(){
			      	 showList(nowShow({'list':tvShow,'time':json_curdate.slice(11,13)}))
		})
	})


