window.onload=function(){
	// 关闭面板
	var oClose=document.getElementById('ui_boxyClose');
	var oPanel=document.getElementById('loginPanel');
		oClose.onclick=function(){
			oPanel.style.display="none";
		}
	//点开状态栏
	var lis=document.getElementsByTagName('li');
	var loginstatePanel=document.getElementById('loginStatePanel');
	var loginstate=document.getElementById('loginstate online');
		loginstate.onclick=function(e){
	//取消冒泡，否则点击不开状态面板
			e = e || window.event;
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble=true;
			}
			loginstatePanel.style.display="block";
		}
	//点击页面的任何一处关闭按钮
		document.onclick=function(){
			loginstatePanel.style.display="none";
		}
	// 显示坐标
		
	/*
	// 拖拽效果实现
	var loginBg=document.getElementById('loginBg');
		loginBg.onmousedown=drag;
	//　定义拖拉函数
	function drag(e){
		e = e || window.event;
		var oPanel=document.getElementById('loginPanel');
		// 鼠标点击时光标的位置，相对于面板
		disX=e.clientX-oPanel.offsetLeft;
		disY=e.clientY-oPanel.offsetTop;
		//移动
		document.onmousemove=function(e){
			e = e || window.event;
			fnMove(event,disX,disY);
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
	}
	//定义位置函数
	function fnMove(event,disX,disY){
		e = e || window.event;
		var oPanel=document.getElementById('loginPanel');
		var l=e.clientX-disX;
		var r=e.clientY-disY;
		winW=document.documentElement.clientWidth || document.body.clientWidth;
		winH=document.documentElement.clientHeight || document.body.clientHeight;
		maxW=winW-oPanel.offsetLeft;
		maxH=winH-oPanel.offsetTop;
		if(l<0){
			l=0;
		}else if(l>maxW){
			l=maxW;
		}
		if(r<0){
			r=0;
		}else if(r>maxH){
			r=maxH;
		}
		oPanel.style.left=l +'px';
		oPanel.style.right=r + 'px';
	}*/
}