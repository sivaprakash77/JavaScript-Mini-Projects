function updateClock() {
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var ampm = (hour < 12) ? "AM" : "PM";
    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour === 0) ? 12 : hour;

    document.getElementById("hour").innerHTML = (hour < 10 ? "0" : "") + hour;
    document.getElementById("minute").innerHTML = (minute < 10 ? "0" : "") + minute;
    document.getElementById("second").innerHTML = (second < 10 ? "0" : "") + second;
    document.getElementById("ampm").innerHTML = ampm;
}

setInterval(updateClock, 1000);