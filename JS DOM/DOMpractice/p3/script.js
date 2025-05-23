var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

form.addEventListener("submit", function(ev){
    ev.preventDefault();
    for(var i =0; i<inps.length;i++){
        if(inps[i].value.trim() === '' ){
            h4.textContent="invalid input hai ji sahi daalo";
            h4.style.color="red";
            break;
        }
        else{
             h4.textContent="";
            h4.style.color="black";
        }
    }
})