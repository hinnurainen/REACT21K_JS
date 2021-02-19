let eventName = document.getElementById("eventname").value;
let date1 = document.getElementById("firstdate").value;
let date2 = document.getElementById("seconddate").value;
let submit = document.getElementById("submit");
let text;

let difference = date1.getTime() - date2.getTime();

let days = Math.ceil(difference / (1000 * 3600 * 24));
text = days + ' days to wait for' + eventName;

submit.addEventListener("click", days);
text.textContent = text;

