/*
* @Author: acer
* @Date:   2016-04-11 12:10:26
* @Last Modified by:   acer
* @Last Modified time: 2016-04-11 14:58:51
*/

window.onload=function(){
	var oDiv=document.getElementsByTagName('div');
	for(var i=0;i<oDiv.length;i++){
		oDiv[i].timer=null;
		oDiv[i].alpha=30;
		oDiv[i].onmouseover=function(){
			startMove(this,100);
		}
		oDiv[i].onmouseout=function(){
			startMove(this,30);
		}
	}
}
//var alpha=30;
function startMove(obj,iTarget){
	var oDiv=document.getElementsByTagName('div');
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var speed=0;
		if(obj.alpha>iTarget){
			speed=-10;
		}
		else if(obj.alpha<iTarget){
			speed=10;
		}
		else{
			clearInterval(obj.timer);
		}
		if(obj.offsetAlpha==iTarget){
			clearInterval(obj.timer);
		}
		else{
			obj.alpha+=speed;
			obj.style.filter='alpha(opacity:'+ obj.alpha +')';
			obj.style.opacity=obj.alpha/100;
			};
		},100)
	}