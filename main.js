// let n = prompt("Insert a number");
// for (let i = 1; i < n; i++)
//     console.log(i);
let num = document.querySelector('#time');
setInterval(showTime, 1000);

function showTime(){
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    num.innerText = time;
}