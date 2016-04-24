
　　　export const shuffleArray =   (arr) => {
		    const __this = arr;
		    let m = __this.length;
		    let t;
		    let i;
            console.log(__this)
		    while (m) {
		        i = Math.floor(Math.random() * m--);
		        t = __this[m];
		        __this[m] = __this[i];
		        __this[i] = t;
		    }
		    return __this;
　　　　};
      export  const nowShow =  (j) => {
		 let res = {};
		 res.now = [];
		 res.notNow = [];
		 for(let i = 0; i < j.list.length; i++){
		 	if (j.list[i].end -1 >= j.time && j.list[i].start <= j.time) {
		 		res.now.push(j.list[i]);
		 	}else{
		 		res.notNow.push(j.list[i]);
		 	}

		 };
		 return res;
　　　　};
