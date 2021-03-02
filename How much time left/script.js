let form = document.querySelector("form");
let text = document.querySelector("#answer");
let countdown = document.querySelector("#countdown");

let alldays = [];
let workdays = [];
let countdownTimer;

const daysLeft = (event) => {
    event.preventDefault();

    let startDate = new Date(document.getElementById("firstdate").value);
    let endDate = new Date(document.getElementById("seconddate").value);
    let title = (document.getElementById("eventname").value);

    while (startDate < endDate) {
        startDate.setDate(startDate.getDate() + 1);
        alldays.push(startDate);
        if (startDate.getDay() != 6 && startDate.getDay() != 0) {
            workdays.push(startDate);
        }
    }

    text.textContent = `There are ${alldays.length} days and ${workdays.length} workdays until ${title}`;

    form.reset();
    alldays = [];
    workdays = [];

    timer(endDate, title);
};

const timer = (end) => {
    if (countdownTimer) {
        clearInterval(countdownTimer);
    }

    countdownTimer = setInterval(function () {
        let now = new Date();
        let distance = end.getTime() - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(distance % (1000 * 60) / 1000);

        countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
};

form.addEventListener("submit", daysLeft);