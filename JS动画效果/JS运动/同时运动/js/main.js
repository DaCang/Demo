window.onload=function(){
	var oLi=document.getElementById('li1');
	/*var json={a:12,b:13};
	for(var i in json){
		//alert(i);
		//alert(json[i]);
	}*/
	oLi.onmouseover=function(){
		startMove(oLi,'width',400);
		startMove(oLi,'height',200);
		startMove(oLi,'opacity',100);
	}
	oLi.onmouseout=function(){
		startMove(oLi,'width',200);
		startMove(oLi,'height',100);
		startMove(oLi,'opacity',30);
	}
}
var timer=null;
function startMove(obj,attr,iTarget,fn){
	clearInterval(obj.timer);
	var oLi=document.getElementById('li1');
	timer=setInterval(function(){
		var flag=true;
		if(attr=='opacity'){
			var icur=Math.round(parseFloat(getStyle(obj,attr))*100);
		}
		else{
			var icur=parseInt(getStyle(obj,attr));
		}
		var speed=(iTarget-icur)/10;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(!icur==!iTarget){
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:' + icur+speed+')';
				obj.style.opacity=(icur+speed)/100;
			}
			else{
				obj.style[attr]=icur + speed +'px';
			}
		}
		else{
			clearInterval(timer);
		}

	},30)
}
/*
var timer=null;
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	var oLi=document.getElementById('li1');
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
}*/
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}