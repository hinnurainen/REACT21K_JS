const NUMBER_OF_BULBS = 50;
const BLINKING_SPEED = 500;
const CHOSEN_BULB_INDEX = 10;

let bulbs = [];
let counter = 0;

document.getElementById('start-btn').addEventListener('click', () => {
    const userInput = document.getElementById('speed').value,
        blinkingSpeed = userInput ? userInput : BLINKING_SPEED,
        bulbCount = document.getElementById('bulbCount').value;

    while (counter < bulbCount) {
        const newBulb = document.createElement('div');
        newBulb.className = 'bulb';
        document.getElementById('light-bulbs').appendChild(newBulb);

        bulbs[counter] = false; // boolean value of false indicates a switch off bulb
        counter++;
    }

    counter = 0;
    document.getElementsByClassName('bulb')[counter].classList.add('active');

    bulbs[counter] = true;

    document.getElementsByClassName('bulb')[CHOSEN_BULB_INDEX].classList.add('chosen');


    const timer = setInterval(() => {
        document.getElementsByClassName('bulb')[counter].classList.remove('active');
        bulbs[counter] = false; // switch off the current bulb


        // TODO: improve the logical if needed
        // if value of counter is not yet the index of the last bulb
        if (counter < bulbCount - 1) {
            counter++; // calculate the index of next bulb
        } else { // reached the end of the array   
            counter = 0; // reset counter to the index of the first bulb
        }

        bulbs[counter] = true; // switch it on
        document.getElementsByClassName('bulb')[counter].classList.add('active');
    }, blinkingSpeed);

    document.getElementById('stop-btn').addEventListener('click', () => {
        // TODO: stop the blinking and announce if user has won the game
        clearInterval(timer);

        if (document.querySelector('.active.chosen') && counter === CHOSEN_BULB_INDEX) {
            alert('you win');
        } else {
            alert('no win');
        }
    })

    /**
     * You don't have to care about this fn unless you want to
     * @param {NodeList} nodes the list of elements to be arranged in a circle
     * @return {void}
     */
    const arrangeBulbsInACircle = nodes => {
        const radius = '12em',
            start = -90,
            $els = [...nodes], // turn nodelist into a real array
            numberOfEls = $els.length,
            slice = 360 / numberOfEls;

        $els.forEach((el, index) => {
            const rotate = slice * index + start;
            const rotateReverse = rotate * (-1);

            el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
        })
    }

    // invoke the fn on the class bulb elements to create the effect
    arrangeBulbsInACircle(document.getElementsByClassName('bulb'));
})