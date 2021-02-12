//jshint esversion:6

const countdown = document.querySelector(".countdown");

const deadline = new Date (2021,1,29,00,00,00);
const interval = setInterval(function(){

   const current = new Date();

   const diff = deadline - current;

   const days = Math.floor(diff/(1000 * 60 * 60 * 24)) + "";

   const hours = Math.floor((diff/(1000 * 60 * 60)) % 24) + "";

   const minutes = Math.floor((diff / (1000 * 60)) % 60) + "";

   const seconds = Math.floor((diff / (1000)) % 60) + "";
   countdown.innerHTML = `
   <div data-content="Days"> ${days.length !== 1 ? days : `0${days}` }</div>
   <div data-content="Hours">${hours.length !== 1 ? hours : `0${hours}` }</div>
   <div data-content="Minutes">${minutes.length !== 1 ? minutes : `0${minutes}` }</div>
   <div data-content="Seconds">${seconds.length !== 1 ? seconds : `0${seconds}` }</div>
   ` ;
   if(diff < 0){
     clearInterval(interval);
     countdown.innerHTML = "<h1>Here We Go.. <br> Launched </h1>";
   }
 }, 1000);
