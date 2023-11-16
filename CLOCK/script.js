//Lấy thời gian
function dongho()
{
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if (hour < 10)
    {
        hour = "0" + hour;
    }
    if (minute < 10)
    {
        minute = "0" + minute;
    }
    if (second < 10)
    {
       second = "0" + second;
    }
    document.getElementById('demo1').innerHTML = hour +":" +  minute  +  ":" + second;
    setTimeout("dongho()",1000); 
}dongho();




var timer;
function setTimer() {

    var hours = document.getElementById('hours').value;
    var minutes = document.getElementById('minutes').value;
    var seconds = document.getElementById('seconds').value;


    var currentTime = new Date(); 
    var targetTime = new Date();
    targetTime.setHours(hours); 
    targetTime.setMinutes(minutes);
    targetTime.setSeconds(seconds);

    var timeDifference = targetTime.getTime() - currentTime.getTime();

    if (timeDifference > 0) {
        timer = setTimeout(showTime, timeDifference);
        alert('Hẹn giờ đã được đặt.');
    } else {
        alert('Vui lòng chọn một thời gian hợp lệ trong tương lai.');
    }
}


function cancelTimer() {
    clearTimeout(timer);
    alert('Hẹn giờ đã được hủy.');
}

function showTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' +seconds;

    timer = setTimeout(showTime, 1000); 

    
    var targetHours = parseInt(document.getElementById('hours').value);
    var targetMinutes = parseInt(document.getElementById('minutes').value);
    var targetSeconds = parseInt(document.getElementById('seconds').value);

    if (hours == targetHours && minutes == targetMinutes && seconds == targetSeconds) {
        alert('Đã đến thời gian hẹn giờ!');
        clearTimeout(timer); // Hủy hẹn giờ
    }
}

function formatTime(time) {
    if (time < 10) {
        time = '0' + time;
    }
    return time;
}


