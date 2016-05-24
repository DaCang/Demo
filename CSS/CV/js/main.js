$(function(){
	// 各个版面进行居中设置
	$(".content").css('height',$(window).height());
	$(".middle").css('paddingTop',$(window).height()/2-$(".middle").height()/2);
	// 导航栏转换
	// var oUl = document.getElementById('navigation');
	// var oLi = oUl.getElementsByTagName('li');
	// var oDiv = document.getElementsByClassName('content');

	// for(var i=0;i<oLi.length;i++){
	// 	oLi[i].index = i;
	// 	oLi[i].onclick = function(){
	// 		for(var i=0;i<oDiv.length;i++){
	// 			if(i !== oLi.index){
	// 				oDiv[i].className = "text-center content hidden";
	// 			}
	// 		}
	// 		oDiv[this.index].className = "text-center content";
	// 	}
	// }
});
