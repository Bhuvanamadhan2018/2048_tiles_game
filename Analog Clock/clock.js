let hrHand = document.querySelector('.hr-hand');
let minHand = document.querySelector('.min-hand');
let secHand = document.querySelector('.sec-hand');

setInterval(updateTime,1000);

function updateTime(){
    let date = new Date();
    secHand.style.transform = `rotate(${date.getSeconds() *6}deg)`
    minHand.style.transform = `rotate(${date.getMinutes() *6}deg)`
    hrHand.style.transform = `rotate(${date.getHours() *30 + date.getMinutes() * 0.5}deg)`
}