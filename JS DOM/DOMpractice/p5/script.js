var start = document.querySelector("#start")
var stop = document.querySelector("#stop")
var h2 = document.querySelector("h2")
var int;
start.addEventListener("click",function(){
    var count=0;
   int = setInterval(function(){
        count++;
        h2.textContent=count;
    },1000);
})
stop.addEventListener("click",function(){
    clearInterval(int);
})