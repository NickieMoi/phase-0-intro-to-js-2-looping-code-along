function writeCards(theArray, event) {
    let thankYouCards = [];
    for (let i = 0; i < theArray.length; i++) {
        thankYouCards.push(
            `Thank you, ${theArray[i]}, for the wonderful ${event} gift!`
        );
    }
    return thankYouCards;
}
function countdown(number) {
    while (number > 0) {
        console.log(number);
        number-= 1;
    }
    console.log(number);
}
