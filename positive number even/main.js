/* Make a program that asks one number from the user. Then the program finds out if the number is positive and is the number divisible by 2. Message "that is even number" is printed else "that number is odd" is printed.*/

function evenOdd() {
    let a = Number(document.querySelector("#a").value);
    let result = document.querySelector("#result");
    let text;


if (a >= 0 && a % 2 == 0) {
    text = "Even";
} else if (a >= 0 && a % 2 !== 0) {
    text = "Odd";
} else {
    text = "Negative number";
}

result.textContent = text;
}
