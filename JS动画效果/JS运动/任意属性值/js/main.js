/*
* @Author: acer
* @Date:   2016-04-11 12:10:26
* @Last Modified by:   acer
* @Last Modified time: 2016-04-11 16:24:45
*/

window.onload=function(){
	/*var aLi=document.getElementsByTagName('li')
	for(var i=0;i<aLi.length;i++){
		aLi[i].timer=null;
		aLi[i].onmouseover=function(){
			startMove(this,400);
		}
		aLi[i].onmouseout=function(){
			startMove(this,200);
		}
	}*/
	var li1=document.getElementById('li1');
	var li2=document.getElementById('li2');
	var li3=document.getElementById('li3');
	li1.onmouseover=function(){
		startMove(this,'width',400);
	}
	li1.onmouseout=function(){
		startMove(this,'width',200);
	}
	li2.onmouseover=function(){
		startMove(this,'height',200);
	}
	li2.onmouseout=function(){
		startMove(this,'height',100);
	}
	li3.onmouseover=function(){
		startMove(this,'opacity',100);
	}
	li3.onmouseout=function(){
		startMove(this,'opacity',30);
	}
}
//var timer=null;
function startMove(obj,attr,iTarget){
	var aLi=document.getElementsByTagName('li')
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var icur=0;
		if(attr=='opacity'){
			icur=Math.round(parseFloat(getStyle(obj,'opacity'))*100);
		}
		else{
			icur=parseInt(getStyle(obj,attr));
		}
		var speed=(iTarget-icur)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(icur==iTarget){
			clearInterval(obj.timer);
		}
		else{
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:' + icur+speed +')';
				obj.style.opacity=(icur+speed)/100;
			}
			else{
			obj.style[attr]=icur+speed+'px';
			}
		}

	},10)

}
/*
function startMove1(obj,iTarget){
	var aLi=document.getElementsByTagName('li')
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var icur=parseInt(getStyle(obj,'height'));
		var speed=(iTarget-icur)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(icur==iTarget){
			clearInterval(obj.timer);
		}
		else{
			obj.style['height']=icur+speed+'px';
		}

	},10)

}
*/
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}