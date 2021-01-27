/* Make a program that asks age of the user. If the age is less than 18 the text â€œtoo youngâ€ is printed. If the age is less than 27 the text â€œRight age for military serviceâ€ is printed. If the age is less than 41 the text â€œYou are in reserveâ€ is printed.  If the age is less than 55 the text â€œYou are in backup reserveâ€ is printed. All other cases â€œtoo agedâ€ is printed. */
function military() {
    let age = Number(document.querySelector("#age").value);
    let answer = document.querySelector("#answer");
    let text;

if (age < 18) {
    text = "You are too young for military service.";
} else if (age <= 27) {
    text = "You have the right age for military service.";
} else if (age < 41) {
    text = "You are in reserve.";
} else if (age < 55) {
    text = "You are in backup reserve.";
} else {
    text = "You are too aged for military service.";
}

answer.textContent = text;
}