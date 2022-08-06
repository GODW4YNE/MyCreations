var lines = document.getElementsByClassName('lines');
var clockEl =  document.getElementsByClassName('clock')[0];

for (var i = 1; i<60; i++) {
    clockEl.innerHTML += "<div class='lines'></div>";
    lines[i].style.transform = "rotate("+6*i+"deg)";
}

function clock() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    var hDeg = h*30+m*(360/720);
    var mDeg = h*30+s*(360/3600);
    var sDeg = s*6;

    var h_line = document.querySelector('.h-hand');
    var m_line = document.querySelector('.m-hand');
    var s_line = document.querySelector('.s-hand');

    h_line.style.transform = "rotate("+hDeg + "deg)";
    m_line.style.transform = "rotate("+mDeg + "deg)";
    s_line.style.transform = "rotate("+sDeg + "deg)";
}

setInterval("clock()", 100);

