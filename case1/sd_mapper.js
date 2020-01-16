'use strict';
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Jazzmyne Nixon
   Date: 1/16/2020   

*/

var thisTime = new Date();
var timeStr = thisTime.toLocaleString();

document.getElementById('timeStamp').innerHTML = timeStr;

var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

var mapNum = (2*thisMonth + thisHour) % 24;

var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
console.log(imgStr);

document.getElementById('planisphere').insertAdjacentHTML('afterbegin', imgStr);