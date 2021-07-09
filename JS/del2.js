// Del 2

// Definera en "klassisk" funktion (inte en arrow funktion) som returnerer en valfri siffa.
function tärning() {
    console.log((Math.floor(Math.random()*6)) +1);
}
tärning(); //returnerar slumpmässigt när man skriver tärning();


// Definera en arrow funktion som returnerer en valfri siffra

const inchToCM = inches => inches * 2.54;

inchToCM(3); //Returnerar 3 * 2.54;

// Definera en "klassisk" funktion som tar in två värden (nummer) och returnerar summan av dessa.
function calculateBill() {
    console.log('Running Calculate Bill!');
    const total = 100 * 1.5;
    return total;
}
const myTotal = calculateBill();
console.log(`Your total is ${myTotal}`);

// Definera en arrow funktion som tar in två värden(nummer) och returnerar summan av dessa.
const add = (a, b = 3) => a + b;

add(5); // Returnerar 8 i detta fallet

// Definera en funktion av valfritt slag, som tar in en annan funktion och sedan anropar denna.

function outer() {
    const outerVar = 'Hey I am the outer Var!!';
    
    function innerVar() {
        const innerVar = 'Hey I am the inner var!';
        console.log(innerVar);
        console.log(outerVar);
    }
    return inner;
}