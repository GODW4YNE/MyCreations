const days = document.querySelectorAll('days');
const hours = document.querySelectorAll('hours');
const minutes = document.querySelectorAll('minutes');
const seconds = document.querySelectorAll('seconds');

const currentYear = new Date().getFullYear();

const birthDay = new Date(`December 24 ${currentYear} 00:00:00`);

// Update Countdown

function updateCountdown() {
    const currentTime = new Date();
    const diff = birthDay - currentTime; 

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h < 10 ? '0' + h : h;
    document.getElementById("minutes").innerHTML = m < 10 ? '0' + m : m;
    document.getElementById("seconds").innerHTML = s < 10 ? '0' + s : s;

};

setInterval(updateCountdown, 1000);