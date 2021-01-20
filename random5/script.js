let randomNumber1 = Math.floor(Math.random()*2);
let randomNumber2 = Math.floor(Math.random()*2);
let randomNumber3 = Math.floor(Math.random()*2);
let randomNumber4 = Math.floor(Math.random()*2);
let randomNumber5 = Math.floor(Math.random()*2);

alert([randomNumber1,randomNumber2,randomNumber3,randomNumber4,randomNumber5]);

if (randomNumber1 == randomNumber2 == randomNumber3 ==  randomNumber4 ==  randomNumber5 == 1) {
    alert("Congratulations you won the jackpot! The probability is " + "1/" + 2**5);
} else if (randomNumber1 == randomNumber2 == randomNumber3 ==  randomNumber4 ==  randomNumber5 == 0) {
    alert("Well done, you got five zeros, which is as unlikely as getting five ones and winning the jackpot. Unfortunately no prize this time.");
} 