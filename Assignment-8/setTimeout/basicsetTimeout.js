//Task: Create a function that logs numbers 1 to 5, with a 1-second delay between each number.

for (let counter = 1; counter < 6; counter++) {
    setTimeout(() => {
        console.log(counter++);
    }, counter*1000);
}


