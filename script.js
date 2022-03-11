function checkTime() {
    const date = new Date();
    var dayM = date.getDate();
    var dayW = date.getDay();
    var year = date.getFullYear();
    var month = date.getMonth();

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if(min < 10) {
        min = "0" + min;
    }
    if(sec < 10) {
        sec = "0" + sec;
    }



    if(sessionStorage.getItem("12Hour") == "true") {
        if(hour > 12) {
            hour = hour - 12;
            document.getElementById("ap").innerText = "PM";
        }
        else {
            document.getElementById("ap").innerText = "AM";
        }
        document.getElementById("hour").innerText = hour;
        document.getElementById("min").innerText = min;
        document.getElementById("sec").innerText = sec;
    }
    else {
        document.getElementById("hour").innerText = hour;
        document.getElementById("min").innerText = min;
        document.getElementById("sec").innerText = sec;
    }

    switch(dayW) {
        case 0: dayW = "Sunday";
        break;
        case 1: dayW = "Monday";
        break;
        case 2: dayW = "Tuesday";
        break;
        case 3: dayW = "Wednesday";
        break;
        case 4: dayW = "Thursday";
        break;
        case 5: dayW = "Friday";
        break;
        case 6: dayW = "Saturday";
        break;
    }

    
    switch(month) {
        case 0: month = "January";
        break;
        case 1: month = "Febuary";
        break;
        case 2: month = "March";
        break;
        case 3: month = "April";
        break;
        case 4: month = "May";
        break;
        case 5: month = "June";
        break;
        case 6: month = "July";
        break;
        case 7: month = "August";
        break;
        case 8: month = "September";
        break;
        case 9: month = "October";
        break;
        case 10: month = "November";
        break;
        case 11: month = "December";
        break;
    }


    var monthEnd
    switch(dayM) {
        case 1: dayM += "st";
        break;
        case 2: dayM += "nd";
        break;
        case 3: dayM += "rd";
        break;
        case 21: dayM += "st";
        break;
        case 22: dayM += "nd";
        break;
        case 23: dayM += "rd";
        break;
        case 31: dayM += "st";
        break;
        default: dayM += "th";
        break;
    }


    document.getElementById("dayofweek").innerText = dayW;
    document.getElementById("month").innerText = month;
    document.getElementById("day").innerText = dayM;
    document.getElementById("year").innerText = year;

}















window.addEventListener("load", function() {
    document.getElementById("format").addEventListener("click", function () {
        if(sessionStorage.getItem("12Hour") == "true") {
            sessionStorage.setItem("12Hour", "false");
            location.reload();
        }
        else {
            sessionStorage.setItem("12Hour", "true");
            location.reload();
        }
    });
    checkTime();
    setInterval(checkTime, 1000);
});