var btn = document.querySelector("button");
var p = document.querySelector("p");
btn.addEventListener("click",function(){
    p.textContent="hey hello";
})

btn.addEventListener("dblclick",function(){
   
    p.innerHTML="<b><i> red</i></b>";
})