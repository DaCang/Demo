/*
* @Author: acer
* @Date:   2016-04-11 12:10:26
* @Last Modified by:   acer
* @Last Modified time: 2016-04-11 14:29:19
*/

window.onload=function(){
	var aLi=document.getElementsByTagName('li')
	for(var i=0;i<aLi.length;i++){
		aLi[i].timer=null;
		aLi[i].onmouseover=function(){
			startMove(this,400);
		}
		aLi[i].onmouseout=function(){
			startMove(this,200);
		}
	}
}
//var timer=null;
function startMove(obj,iTarget){
	var aLi=document.getElementsByTagName('li')
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var speed=(iTarget-obj.offsetWidth)/20;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(obj.offsetWidth==iTarget){
			clearInterval(obj.timer);
		}
		else{
			obj.style.width=obj.offsetWidth+speed+'px';
		}

	},10)

}