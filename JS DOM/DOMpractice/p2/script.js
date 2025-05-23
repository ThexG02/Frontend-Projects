var i1=document.getElementById("one");
var i2=document.getElementById("two");

document.querySelector("button")
.addEventListener("click", function(){
    var src1= i1.src;
    var scr2= i2.src;
    i1.src=scr2;
    i2.src=src1;
});