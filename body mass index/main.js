/* Make a program that calculates body mass index. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m2, resulting from mass in kilograms and height in metres. Based on result display correct range:
BMI	          	Status
Below 18.5	    Underweight
18.5 â€“ 24.9	    Normal or Healthy Weight
25.0 â€“ 29.9	    Overweight
30.0 and Above	Obese */

function bmi() {
    let weight = Number(document.querySelector("#weight").value);
    let height = Number(document.querySelector("#height").value);
    let result = document.querySelector("#result");
    let answer = document.querySelector("#answer");
    let bmi = weight / (height/100*height/100);
    let text;

    if (bmi >= 18.5 && bmi < 25) {
    text = "Normal or healthy weight";
    } else if (bmi < 18.5) {
    text = "Underweight";
    } else if (bmi  >= 25 && bmi < 30) {
    text = "Overweight";
    } else {
    text = "Obese";
    }

result.innerHTML = "Your BMI is " + bmi;
answer.textContent = text;
}