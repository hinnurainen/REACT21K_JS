
// 7. Create a while loop that will run the above application for an undefinite number of time, and only break out of the loop if the jackpot prize is won. 
// 8. Create a variable to keep track of many rounds have been played in order to win the jackpot
// 9. If each round costs 50 cents, run the above program 5 times, either manually or use a while loop to help you, in order to learn the average amount of money you have to spend on winning a jackpot 😄
// 10. Increase the random number range to be any number between 0 - 5, run the program on number 9 again to see how much money you would actually have to spend to win a jackpot
// 11. If the jackpot prize was 30000 EUR, how much profit / loss do you make ?

let winningStatus = false;
let roundPlayed = 0;
let jackpotCounter = 0;


const RANDOMIZE_RANGE = 2;
const COST_OF_ONE_ROUND = 0.5;
const JACKPOT_TO_BE_WON = 100;

while (jackpotCounter < JACKPOT_TO_BE_WON) {
    jackpotCounter++;

    winningStatus = false;

    while (winningStatus === false) {
        roundPlayed++;


        // 1. Create an **array of 5 elements**, each element is a random number of either 1 or 0
        // 2. Create a while loop, that goes through each element in the array, check if they are 1 or 0
        // 3. Also create a counter variable to keep track of the number of 1 and 0 values in the array
        // 4. If the number of 1s is 5, announce the jackpot prize
        // (5. If the number of 0s is 5, announce the congrat message) ?
        // (6. If the number of 1s is 3 < x < 5, announce smaller prize) ?


        let chosenNumbers = [];

        let counter = 0;

        while (counter < 5) {
            chosenNumbers[counter] = Math.floor(Math.random() * RANDOMIZE_RANGE);
            counter++;
        }

        console.log('The value of the counter after the creation loop: ', counter);

        let oneCounter = 0;
        let zeroCounter = 0;

        counter = 0;

        while (counter < 5) {
            console.log(`Checking if element at index ${counter} is 1 or 0`);

            if (chosenNumbers[counter] === 1) {
                console.log('It is 1');
                oneCounter++;
            } else if (chosenNumbers[counter] === 0) {
                console.log('It is 0');
                zeroCounter++;
            }

            counter++;
        }

        console.log(`Found ${oneCounter} ones and ${zeroCounter} zeroes`);

        if (oneCounter === 5) {
            winningStatus = true;
            console.log('Jackpot!');

        } else if (zeroCounter === 5) {
            winningStatus = false;
            console.log('You got five 0s which is as unlikely as to have five 1s but sorry, no prize this time.');

        } else if (oneCounter === 4) {
            winningStatus = false;
            console.log('Congrats, you got four 1s and win a smaller prize!');
        }
    }
}

console.log(`${roundPlayed} rounds have been played until ${JACKPOT_TO_BE_WON} jackpots are won`);
console.log(`${roundPlayed * COST_OF_ONE_ROUND} EUR was spent to win that ${JACKPOT_TO_BE_WON} jackpots`);
console.log(`${roundPlayed * COST_OF_ONE_ROUND / JACKPOT_TO_BE_WON} EUR was spent on average to win a single jackpot`);