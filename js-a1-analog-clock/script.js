setInterval(setClock, 1000);

const hourHand = document.querySelector('[hour-hand]');
const minHand = document.querySelector('[min-hand]');
const secHand = document.querySelector('[sec-hand]');

function setClock() {
     const currDate = new Date();
     const secRatio = currDate.getSeconds() / 60;
     const minRatio = (secRatio + currDate.getMinutes()) / 60;
     const hourRatio = (minRatio + currDate.getHours()) / 12;
     
     setRotation(hourHand, hourRatio);
     setRotation(minHand, minRatio);
     setRotation(secHand, secRatio);
}

function setRotation(element, rotationRatio) {
     element.style.setProperty('--rotation', 360*rotationRatio);
}

setClock();