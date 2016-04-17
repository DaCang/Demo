window.onload=function(){
	var oLi=document.getElementById('share');
	oLi.onmouseover=function(){
		startMove(this,{'width':400,'height':200,'opacity':100});
	}
	oLi.onmouseout=function(){
		startMove(this,{'width':200,'height':100,'opacity':30});
	}
}
var timer=null;
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	var oLi=document.getElementById('share');
	obj.timer=setInterval(function(){
		var flag=true;
		for(var attr in json){
			if(attr=='opacity'){
			var icur=Math.round(parseFloat(getStyle(obj,attr))*100);
	        }
			else{
			var icur=parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr]-icur)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(!icur==!json[attr]){
				flag=false;
				if(attr=='opacity'){
					obj.style.filter='alpha(opacity:' + icur+speed+')';
					obj.style.opacity=(icur+speed)/100;
				}
				else{
					obj.style[attr]=icur + speed +'px';
				}
			}
			else{
				clearInterval(obj.timer);
			}


			}
	},30)
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}