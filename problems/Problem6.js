// Code that gives the next Date in javascript 



var day = new Date();
var nextDay = new Date();
nextDay.setDate(day.getDate() + 1);
console.log(`${nextDay.getFullYear()}-${nextDay.getMonth()+1}-${nextDay.getDate()}`);
