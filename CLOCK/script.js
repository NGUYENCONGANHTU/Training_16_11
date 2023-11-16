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



// Hẹn giờ
var timer;
function setTimer() {
    //lấy các giá tị ở các phần thử id bên HTML
    var hours = document.getElementById('hours').value;
    var minutes = document.getElementById('minutes').value;
    var seconds = document.getElementById('seconds').value;


    var currentTime = new Date(); // thời gian hiện tại
    var targetTime = new Date();//
    targetTime.setHours(hours);//thiết lập giá trị giờ của người nhập 
    targetTime.setMinutes(minutes);//giá trị phút của người nhập
    targetTime.setSeconds(seconds);//giá trị giây của người nhập 

    var timeDifference = targetTime.getTime() - currentTime.getTime();

    if (timeDifference > 0) {
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

    timer = setTimeout(showTime, 1000); // Cập nhật thời gian mỗi giây

    // Kiểm tra nếu đến thời gian hẹn giờ
    var targetHours = document.getElementById('hours').value;
    var targetMinutes = document.getElementById('minutes').value;
    var targetSeconds = document.getElementById('seconds').value;

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




