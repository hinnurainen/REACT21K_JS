/* Make a program that asks hourly salary and how many hours user worked on one day. With this information program calculates dayâ€™s salary.
The salary is calculated as follows:
- first 7 hours by hourly salary
- next 2 hours 50% extra
- rest of the hours 100% extra */

function salary() {
    let askSalary = Number(document.querySelector("#askSalary").value);
    let workingTime = Number(document.querySelector("#workingTime").value);
    let answer = document.querySelector("#answer");
    let text;

    let normalPay = askSalary * workingTime;
    let secondOption = (askSalary * 7) + (workingTime - 7) * 1.5 * askSalary;
    let thirdOption = normalPay + (2 * 1.5 * askSalary) + (workingTime - 9) * 2 * askSalary;

    if (workingTime <= 7) {
        text = "Your total salary for the day is " + normalPay + " euros";
    } else if (workingTime <= 9) {
        text = "Your total salary for the day is " + secondOption + " euros";
    } else {
        text = "Your total salary for the day is " + thirdOption + " euros";
    }

    answer.textContent = text;
}