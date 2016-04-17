var lis=['数码相机','iPhone','iPad','Mac Pro','全自动洗衣机','美的电冰箱','苏泊尔电饭煲','1000元超市卡','5000元美容卡','美的变频空调','爱奇艺一年会员VIP','家政服务10次','华东5日游','谢谢惠顾'],
	timer=null,
	flag=0;
window.onload=function(){
	var title=document.getElementById('title'),
		play=document.getElementById('play'),
		stop=document.getElementById('stop');
	//点击事件 停止事件
		play.onclick=playFun;
		stop.onclick=stopFun;
	//键盘事件
		document.onkeyup=function(event){
			event = event || window.event;
			if(event.keyCode==13){
				if(flag==0){
					playFun();
					flag=1;
				}else{
					stopFun();
					flag=0;
				}
			}
		}
}
//定义函数
function playFun(){
	var title=document.getElementById('title');
	var	play=document.getElementById('play');
		clearInterval(timer);
		timer=setInterval(function(){
			var random=Math.floor(Math.random()*lis.length);
				title.innerHTML=lis[random];
		},50);
		play.style.background="#ccc";
}

function stopFun(){
	var stop=document.getElementById('stop');
	var	play=document.getElementById('play');
		clearInterval(timer);
		play.style.background='blue';
}
