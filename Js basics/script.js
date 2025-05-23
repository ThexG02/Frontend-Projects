//Set time Out 
// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(()=>{
//     console.log("lala land");
// }, 3000)
// console.log(4);

//Set Interval

// var count =0;
// const hi = setInterval(()=>{
//     if(count===2) clearInterval(hi);
//     count++;
//     console.log(count);
// },1000)


//Promise 
// const parchi = new Promise(function(resolve, reject){
//     fetch('https://randomuser.me/api/')
//     .then(raw=>raw.json())
//     .then(res=>{
//         if(res.results[0].gender === "male") resolve();
//         else reject();
//     });
// });

// parchi
// .then(function(){
//     console.log("Green hai toh Male hai")
// })
// .catch(function(){
//     console.log("Red hai toh female hai")
// })


//call back 

function greet( name , callback){
    console.log(`Hi ${name}`);
    callback();
}
function sayBye(){
    console.log("Bye sir");
}
greet("Harsh",sayBye);