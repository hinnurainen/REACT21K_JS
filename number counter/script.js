/**
 * 1. Randomize a number between the range of 1 - 100
 * 2. Determine the range of the number 0 < x < 10
 10 < x < 19
 100 sata
 20 <= x < 99
 * Read out that number in Finnish
 */
 
const myNumber = Math.round(Math.random() * 100);
let result="";

 if (0 <= myNumber && myNumber <=10) {
     switch(myNumber) {
        case 0:
             result = 'nolla';
             break;
        case 1:
            result = 'yksi';
            break;
        case 2:
            result = 'kaksi';
            break;
        case 3:
            result = 'kolme';
            break;
        case 4:
            result = 'neljä';
            break;
        case 5:
            result = 'viisi';
            break;
        case 6:
            result = 'kuusi';
            break;
        case 7:
            result = 'seitsemän';
            break;
        case 8:
            result = 'kahdeksan';
            break;
        case 9:
            result = 'yhdeksän';
            break;
        case 10:
            result = 'kymmenen';
            break;
         default:
            break;
     }
 } else if (10 < myNumber && myNumber <= 19) {
     let remainer = myNumber - 10;
     switch(remainer) {
        case 1:
             result += 'yksi';
             break;
        case 2:
            result += 'kaksi';
            break;
        case 3:
            result += 'kolme';
            break;
        case 4:
            result += 'neljä';
            break;
        case 5:
            result += 'viisi';
            break;
        case 6:
            result += 'kuusi';
            break;
        case 7:
            result += 'seitsemän';
            break;
        case 8:
            result += 'kahdeksan';
            break;
        case 9:
            result += 'yhdeksän';
            break;
        default:
            break;
        }
        result += 'toista';
} else if (20 <= myNumber && myNumber <= 99) {
    let module = Math.floor(myNumber / 10);
    let remainder = myNumber % 10;
    switch(module) {
             case 1:
                 result += 'yksi';
                 break;
             case 2:
                 result += 'kaksi';
                 break;
             case 3:
                 result += 'kolme';
                 break;
             case 4:
                 result += 'neljä';
                 break;
             case 5:
                 result += 'viisi';
                 break;
             case 6:
                 result += 'kuusi';
                 break;
             case 7:
                 result += 'seitsemän';
                 break;
             case 8:
                 result += 'kahdeksan';
                 break;
            case 9:
                result += 'yhdeksän';
                break;
            default:
                break;
         }
        result += 'kymmentä';

         switch(remainder) {
            case 1:
                 result += 'yksi'
                 break;
            case 2:
                result += 'kaksi';
                break;
            case 3:
                result += 'kolme';
                break;
            case 4:
                result += 'neljä';
                break;
            case 5:
                result += 'viisi';
                break;
            case 6:
                result += 'kuusi';
                break;
            case 7:
                result += 'seitsemän';
                break;
            case 8:
                result += 'kahdeksan';
                break;
            case 9:
                result += 'yhdeksän';
                break;
            default:
                break;
         }
 } else {
     result = 'sata';
 }

 console.log(result);