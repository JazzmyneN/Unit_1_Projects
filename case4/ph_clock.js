'use strict';
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Jazzmyne Nixon
   Date: 1/16/2020  

   Filename:   ph_clock.js
*/


var minsLeft = 30; //track number of minutes left
var secsLeft = 0; //track number of seconds left within each minute
var timeLeft = (minsLeft * 60) + secsLeft; // calculates amount of time left
var clockID = setInterval(countdown, 1000);

countdown();

function stopClock() {
   document.getElementById('TimeHead').insertAdjacentHTML('beforeend', "<br />(Order Expired)"); //adds order expired message after time runs out
   clearInterval(clockID); //clears interval located in clockID
}

//changes the inner text to a countdown
function countdown() {
   var minsLeft = Math.floor(timeLeft / 60); //calculates mintues left
   var secsLeft = timeLeft - (60 * minsLeft); //calculates seconds left
   var minsString = addLeadingZero(minsLeft); //makes minutes a string
   var secsString = addLeadingZero(secsLeft); //makes seconds a string
   document.getElementById('minutes').textContent = minsString;
   document.getElementById('seconds').textContent = secsString;
   checkTimer();
   timeLeft -= 1;
   console.log(timeLeft);
}

/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
   
function checkTimer() {
   if (timeLeft === 0) stopClock();
}

/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
