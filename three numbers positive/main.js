/* Make a program that asks three numbers from the user. Program prints out sum of the numbers, if any of the numbers is positive. If all the numbers are positive, also print out multiplication. If all numbers are negative, text â€œonly negativesâ€ is printed. Handle zero as positive in this assignment. */
function random3() {
let a = Number(document.querySelector("#a").value);
let b = Number(document.querySelector("#b").value); 
let c = Number(document.querySelector("#c").value);
let text;
let answer = document.querySelector("#answer");

let numSum = a + b + c;
let numMul = a * b * c;

if (a >= 0 && b >= 0 && c >= 0) {
    text = `The sum of those numbers is ${numSum} and multiplication is ${numMul}`;
    
} else if (a >= 0 || b >= 0 || c >= 0) {
    text = `The sum of those numbers is ${numSum}`;

} else if (a, b, c < 0) {
    text = "Only negative numbers";
}

answer.textContent = text;
}