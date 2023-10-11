const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

rl.question('Enter an array of numbers (comma-separated): ', (input) => {
    const userInputArray = input.split(',').map(Number);
    
    if (!userInputArray.every(Number.isInteger)) {
        console.log('Please enter a valid array of numbers.');
        rl.close();
        return;
    }

    const sortedArray = sortArrayDescending(userInputArray);
    console.log('Sorted Array (Descending):', sortedArray.join(', '));
    rl.close();
});
