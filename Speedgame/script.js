let buttons = document.querySelectorAll(".circle");
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("result");
let gameover = document.getElementById("gameover");
let startButton = document.getElementById("startbutton");
let endButton = document.getElementById("endbutton");
let backgroundSound;
let gameoverSound;
let gameOn = false;

let close = document.getElementById("close");

let score = 0;
let active = 0;

let buttonList = [];

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
    let buttonToBePicked = buttonList.pop();
    if (i == buttonToBePicked) {
        score++;
    } else {
        endGame();
    }
    scoredisplay.textContent = `Your score is ${score}`;
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const startGame = () => {
    console.log("Game started");
    gameOn = true;

    startButton.style.display = "none";
    endButton.style.visibility = "visible";

    backgroundSound = new sound("01_Title Screen_backgroundMusic.mp3");
    backgroundSound.play();

    gameLoop(1010);
};

function gameLoop(loop) {
    let nextActive = pickNew(active);

    buttons[nextActive].classList.toggle("active");
    buttons[active].classList.remove("active");

    active = nextActive;

    console.log("Active:", active);

    if (gameOn == true) {
        buttonList.push(active)
    }

    if (buttonList.length == 4) {
        endGame();
        return 0;
    }
    console.log(buttonList);

    loop -= 10
    console.log(loop);

    timer = setTimeout(function () {
        gameLoop(loop);
    }, loop);

    function pickNew(active) {
        let nextActive = getRandomInt(0, 3);

        if (nextActive != active) {
            return nextActive;
        } else {
            return pickNew(active);
        }
    }
}

const endGame = () => {
    clearTimeout();
    console.log("Game over");
    gameOn = false;
    backgroundSound.stop();
    gameoverSound = new sound("07_Game Over_endMusic.mp3");
    gameoverSound.play();
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
    this.sound.loop = true;
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