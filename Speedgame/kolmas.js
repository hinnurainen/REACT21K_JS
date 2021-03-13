let buttons = document.querySelectorAll(".circle");
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("result");
let gameover = document.getElementById("gameover");
let startButton = document.getElementById("startbutton");
let endButton = document.getElementById("endbutton");
let backgroundSound;
let gameoverSound;

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


    backgroundSound = new sound("01_Title Screen_backgroundMusic.mp3");
    backgroundSound.play();

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
    if (score == 0) {
        gameover.textContent = `Your score is ${score} and you can only dream about being Speedy!`;
    } else if (score >= 1 && score <= 9) {
        gameover.textContent = `Your score is ${score} and sorry to disappoint you but you are merely Slowy Gonzales!`;
    } else if (score >= 10 && score <= 19) {
        gameover.textContent = `Your score is ${score} and yes, you are the Speedy of your own life at least!`;
    } else if (score >= 20) {
        gameover.textContent = `Your score is ${score} - congratulations, you probably want to change your last name to Gonzales!`;
    }
};

const reloadGame = () => {
    console.log("what?");
    window.location.reload();
};

close.addEventListener("click", reloadGame);

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}