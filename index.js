// Code your solutions in this file

//The FOR Loop

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);

}

//FOR with Arrays

const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;

}

wrapGifts(gifts);

//ASSIGNMENT

const names = ["Guandalupe", "Ollie", "AKi"];
const event = "surprise";

function writeCards(names, event) {
    let personalCards = []
    for (let i =0; i< names.length; i++) {
        personalCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return personalCards
}

console.log(writeCards(names, event))

function countDown(){
    let numCountdown=11
    while(numCountdown--){
        console.log(numCountdown)
    }

}

