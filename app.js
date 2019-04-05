let currentSum = 0

var readline = require('readline-sync');
console.info('Hi! Welcome to my calculator!')

let shouldContinue = 'y'
do {
    var newNumber = readline.question("Enter number! ");
    var newNumberInteger = parseInt(newNumber, 10);
    console.info('You have entered: ' + newNumber)

    var operation = readline.question("Which operation? A for addition. S for subtract. M for multiply");
    switch (operation) {
        case 'a':
        console.info(currentSum + '+' + newNumberInteger)
            currentSum = currentSum + newNumberInteger
        break;
        case 's':
        console.info(currentSum + '-' + newNumberInteger)
            currentSum = currentSum - newNumberInteger
            break;
        case 'm':
        console.info(currentSum + '*' + newNumberInteger)
            currentSum = currentSum * newNumberInteger
            break;
        default:
        // code block
    }

    shouldContinue = readline.question("Do you want to add more numbers? Enter Y for yes") 
}
while (shouldContinue === 'y');

console.log('Current value= ' + currentSum)