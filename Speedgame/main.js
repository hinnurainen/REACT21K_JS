let buttons = document.querySelectorAll(".circle");
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("result");
let gameover = document.getElementById("gameover");

let close = document.getElementById("close");

let score = 0;
let active = 0;

buttons[0].onclick = function () {
    clicked(0);
};
buttons[1].onclick = function () {
    clicked(1);
};
buttons[2].onclick = function () {
    clicked(2);
};
buttons[3].onclick = function () {
    clicked(3);
};

const clicked = (i) => {
    console.log("clicked:", i);
    score++;
    scoredisplay.textContent = `Your score is ${score}`;
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const startGame = () => {
    console.log("Game started");

    let nextActive = pickNew(active);

    buttons[nextActive].classList.toggle("active");
    buttons[active].classList.remove("active");

    active = nextActive;

    console.log("Active:", active);

    timer = setTimeout(startGame, 1000);

    function pickNew(active) {
        let nextActive = getRandomInt(0, 3);

        if (nextActive != active) {
            return nextActive;
        } else {
            return pickNew(active);
        }
    }
};

const endGame = () => {
    clearTimeout(timer);
    console.log("Game over");
    overlay.style.visibility = "visible";
    gameover.textContent = `Your score is ${score}`;
};

const reloadGame = () => {
    console.log("what?");
    window.location.reload();
};

close.addEventListener("click", reloadGame);

