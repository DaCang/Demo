/*
* @Author: acer
* @Date:   2016-04-11 12:10:26
* @Last Modified by:   acer
* @Last Modified time: 2016-04-11 15:35:16
*/

window.onload=function(){
	startMove();
}
function startMove(){
	var oDiv=document.getElementById('div1');
	setInterval(function(){
		//alert(oDiv.style.width);
		oDiv.style.width=parseInt(getStyle(oDiv,'width')) - 1+'px';
		oDiv.style.fontSize=parseInt(getStyle(oDiv,'fontSize')) + 1 +'px';
	},30)
}
function getStyle(obj,attr){
	//IE
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	//Firefox
	else{
		return getComputedStyle(obj,false)[attr];
	}
}