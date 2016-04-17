/*
* @Author: acer
* @Date:   2016-04-13 14:01:56
* @Last Modified by:   acer
* @Last Modified time: 2016-04-13 15:59:17
*/

'use strict';
window.onload=function(){
	showTime();
}
function checkTime(i){
	if(i<10){
		i='0'+i;
	}
	return i;
}
function showTime(){
	var myDate=new Date();
	var year=myDate.getFullYear();
	var month=myDate.getMonth()+1;
	var date=myDate.getDate();
	var d=myDate.getDay();
	var h=myDate.getHours();
	var m=myDate.getMinutes();
	var s=myDate.getSeconds();
	m=checkTime(m);
	s=checkTime(s);
	var weekend=new Array();
	weekend=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
	var demo=document.getElementById('demo');
	demo.innerHTML=year + '年' + month + '月' + date + '日' + '  ' + weekend[d] + h + ':' + m + ':' + s;
	setTimeout(showTime,500);
}