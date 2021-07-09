// Del 3

/* 
const arr = [
615, 692, 192, 52, 151,
251, 413, 283, 360, 534,
89, 728, 35, 166, 462,
556
];

*/



// Skriv en loop som loopar över alal element i denna array och console.loggar ut varje värde

/* DENNA FÅR MAN TA BORT OM MAN VILL PROVA FUNKTINOEN!
const arr = [
615, 692, 192, 52, 151,
251, 413, 283, 360, 534,
89, 728, 35, 166, 462,
556
];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} 

DENNA FÅR MAN TA BORT OM MAN VILL PROVA FUNKTINOEN! */


// Skriv en loop som loopar över alla element i denna array baklänges och console.loggar ut varje värde.

/* DENNA FÅR MAN TA BORT OM MAN VILL PROVA FUNKTINOEN!

const arrTwo = [
615, 692, 192, 52, 151,
251, 413, 283, 360, 534,
89, 728, 35, 166, 462,
556
];

for (var i = arrTwo.length - 1; i >= 0; i--) {
    console.log(arrTwo[i]);
} 

DENNA FÅR MAN TA BORT OM MAN VILL PROVA FUNKTINOEN! */

// Skriv en function som tar in en array och returnerar en sorterad version av samma array(störst till minst). Skicka sedan in arrayen ovan i denna funktion.

const numbers = [615, 692, 192, 52, 151, 251, 413, 283, 360, 534, 89, 728, 35, 166, 462, 556];

numbers.sort(compareFunction);

console.log(numbers);

function compareFunction(a, b) {
    
    return a - b;
}
