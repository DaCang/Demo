/*
* @Author: acer
* @Date:   2016-04-13 14:01:56
* @Last Modified by:   acer
* @Last Modified time: 2016-04-13 15:55:52
*/

'use strict';
window.onload=function(){
	showDay();
}
function showDay(){
	var currentTime=new Date();
	var endTime=new Date("2016/4/29,12:12:12");
	var leftTime=(endTime.getTime()-currentTime.getTime())/1000;
	var d=parseInt(leftTime/(60*60*24));
	var h=parseInt(leftTime/(60*60)%24);
	var m=parseInt(leftTime/60%60);
	var s=parseInt(leftTime%60);
	if(leftTime<=0){
		document.getElementById('show').innerHTML='团购结束';
	}
	document.getElementById('show').innerHTML=d + '天' + h + '小时' + m + '分钟' + s + '秒';
	setTimeout(showDay,500);

}