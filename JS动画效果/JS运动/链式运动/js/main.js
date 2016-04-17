window.onload=function(){
	var oLi=document.getElementById('li1');
	oLi.onmouseover=function(){
		startMove(this,'opacity',100,function(){
			startMove(oLi,'width',400,function(){
				startMove(oLi,'height',200)
			})
		});
	}
	oLi.onmouseout=function(){
		startMove(this,'height',100,function(){
			startMove(oLi,'width',200,function(){
				startMove(oLi,'opacity',30)
			})
		});
	}
}
var timer=null;
function startMove(obj,attr,iTarget,fn){
	clearInterval(timer);
	var oLi=document.getElementById('li1');
	timer=setInterval(function(){
		if(attr=='opacity'){
			var icur=Math.round(parseFloat(getStyle(obj,attr))*100);
		}
		else{
			var icur=parseInt(getStyle(obj,attr));
		}
		var speed=(iTarget-icur)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(icur==iTarget){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
		else{
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:' + icur+speed+')';
				obj.style.opacity=(icur+speed)/100;
			}
			else{
				obj.style[attr]=icur + speed +'px';
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