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
		var speed=0;
		if(oDiv.offsetLeft>iTarget){
			speed=-10;
		}
		else{
			speed=10;
		}
		if(oDiv.offsetLeft==iTarget){
			clearInterval(timer);
		}
		else{
		oDiv.style.left=oDiv.offsetLeft+speed+'px';
		}		
	},30)
}