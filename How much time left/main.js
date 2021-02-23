function remainingTime(event) {
    event.preventDefault();
    let eventName = document.getElementById("eventname").value;
    let date1 = new Date(document.getElementById("firstdate").value);
    let date2 = new Date(document.getElementById("seconddate").value);
    let answer = document.querySelector("#answer");
    let difference = date2.getTime() - date1.getTime();
    let days = Number(difference / (1000 * 3600 * 24));
    answer.innerHTML = `${days} days to wait for ${eventName}`;
}

function remainingWorkDays() {
    let eventName = document.getElementById("eventname").value;
    let date1 = new Date(document.getElementById("firstdate").value);
    let date2 = new Date(document.getElementById("seconddate").value);
    let result = document.querySelector("#result");
    var flag = true;
    var day, daycount = 0;
    while (flag) {
        day = date1.getDay();
        if (day != 0 && day != 6)
            daycount++;
        date1.setDate(date1.getDate() + 1);
        if (date1.getDate() == date2.getDate() &&
            date1.getMonth() == date2.getMonth()) {
            flag = false;
        }
    }

    result.innerHTML = `${daycount} working days left to ${eventName}`;
}

function countdownFn() {
    var countDownDate = new Date(document.getElementById("seconddate").value).getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var daysFromNowOn = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = daysFromNowOn + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}

document.getElementById("submit").addEventListener("click", remainingTime);
document.getElementById("submit").addEventListener("click", remainingWorkDays);
document.getElementById("submit").addEventListener("click", countdownFn);