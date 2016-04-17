/*window.onload=function(){
	var oDiv=document.getElementById('div1');
	oDiv.onmouseover=function(){
		startMove();
	}
	oDiv.onmouseout=function(){
		stopMove();
	}
}
var timer=mull;
function startMove(){
	clearInterval(timer);
	var oDiv=document.getElementById('div1');
	timer=setInterval(function(){
		if(oDiv.offsetLeft==0){
			clearInterval(timer);
		}
		else{
		oDiv.style.left=oDiv.offsetLeft+10+'px';
		}		
	},30)
}
function stopMove(){
		clearInterval(timer);
	var oDiv=document.getElementById('div1');
	timer=setInterval(function(){
		if(oDiv.offsetLeft==-200){
			clearInterval(timer);
		}
		else{
		oDiv.style.left=oDiv.offsetLeft-10+'px';
		}		
	},30)	
}*/
//两个功能相同的函数采取参数传递的方式
/*window.onload=function(){
	var oDiv=document.getElementById('div1');
	oDiv.onmouseover=function(){
		startMove(10,0);
	}
	oDiv.onmouseout=function(){
		startMove(-10,-200);
	}
}
var timer=mull;
function startMove(speed,iTarget){
	clearInterval(timer);
	var oDiv=document.getElementById('div1');
	timer=setInterval(function(){
		if(oDiv.offsetLeft==iTarget){
			clearInterval(timer);
		}
		else{
		oDiv.style.left=oDiv.offsetLeft+speed+'px';
		}		
	},30)
}*/
//alert(Math.floor(3.98));
//alert(Math.ceil(3.98));
window.onload=function(){
	var oDiv=document.getElementById('div1');
	oDiv.onmouseover=function(){
		startMove(0);
	}
	oDiv.onmouseout=function(){
		startMove(-200);
	}
}
var timer=mull;
function startMove(iTarget){
	clearInterval(timer);
	var oDiv=document.getElementById('div1');
	timer=setInterval(function(){
		var speed=(iTarget-oDiv.offsetLeft)/20;
		/*if(speed>0){
			speed=Math.ceil(speed);
		}
		else{
			speed=Math.floor(speed);
		}*/
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(oDiv.offsetLeft==iTarget){
			clearInterval(timer);
		}
		else{
		oDiv.style.left=oDiv.offsetLeft+speed+'px';
		}		
	},30)
}