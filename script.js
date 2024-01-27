setInterval(analog_clock,1000)

var hour = document.querySelector(".hour")
var minute = document.querySelector(".minute")
var second = document.querySelector(".second")
function analog_clock(){
    console.log("hello");
    let date = new Date();
    var htime = date.getHours();
    var mtime = date.getMinutes();
    var stime = date.getSeconds();
    var hrotation = 30 * htime + mtime / 2;
    var mrotation = 6 * mtime;
    var srotation = 6 * stime;
    let time = new Date();
    document.getElementById("digital-clock").innerHTML = time.toLocaleTimeString();
    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
};
