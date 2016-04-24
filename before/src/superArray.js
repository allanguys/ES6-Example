　define(function (){
return {
　　　　shuffle : function (arr){
		    var __this = arr,
		        m = __this.length,
		        t, i;

		    while (m) {
		        i = Math.floor(Math.random() * m--);
		        t = __this[m];
		        __this[m] = __this[i];
		        __this[i] = t;
		    }
		    return __this;
　　　　},　　　　
        nowShow : function (j){
		 var res = {};
		 res.now = [];
		 res.notNow = [];
		 for(var i = 0; i < j.list.length; i++){
		 	if (j.list[i].end -1 >= j.time && j.list[i].start <= j.time) {
		 		res.now.push(j.list[i]);
		 	}else{
		 		res.notNow.push(j.list[i]);
		 	}

		 };
		 return res;
　　　　}
  }

// define(function (){



//  //  function superArray() {
     
//  //  }

//  //  module.exports = superArray;

//  //  superArray.prototype.shuffle = function(arr) {
// 	//     var __this = arr,
// 	//         m = __this.length,
// 	//         t, i;

// 	//     while (m) {
// 	//         i = Math.floor(Math.random() * m--);
// 	//         t = __this[m];
// 	//         __this[m] = __this[i];
// 	//         __this[i] = t;
// 	//     }
// 	//     return __this;
// 	// }  
// 	// superArray.prototype.nowShow = function(o){

// 	// 	 var res = {};
// 	// 	 res.now = [];
// 	// 	 res.notNow = [];
// 	// 	 for(var i = 0; i < this.length; i++){
// 	// 	 	if (this[i].end -1 >= o && this[i].start <= o) {
// 	// 	 		res.now.push(this[i]);
// 	// 	 	}else{
// 	// 	 		res.notNow.push(this[i]);
// 	// 	 	}

// 	// 	 };
// 	// 	 return res;
// 	// };

});