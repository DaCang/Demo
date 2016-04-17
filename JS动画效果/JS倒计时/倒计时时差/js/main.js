/*
* @Author: acer
* @Date:   2016-04-13 14:01:56
* @Last Modified by:   acer
* @Last Modified time: 2016-04-13 15:16:56
*/

'use strict';
window.onload=function(){
	showDay();
}
function showDay(){
	var currentTime=new Date();
	var endTime=new Date('2016,4,29');
	var leftTime=(endTime.getTime()-currentTime.getTime())/(24*60*60*1000);
	if(leftTime>0){
		leftTime=Math.ceil(leftTime);
	}
	else{
		leftTime=Math.abs(Math.floor(leftTime));
	}
	document.getElementById('show').innerHTML=leftTime;
	setTimeout(showDay,10000);

}