'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// function logger() {
//     console.log('My name is Daniel')
// }

// // calling/running/invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991)
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;

// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);


// Function expresion 
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// // Arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);



// const yearsUntilRetirement = (birthYaer, firstName) => {
//     const age = 2037 - birthYaer;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));



// FUNCTIONS CALLING OTHER FUNCTIONS 

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));


// const calcAge = function (birthYaer) {
//     return 2037 - birthYaer;
// }


// const yearsUntilRetirement = function (birthYaer, firstName) {
//     const age = calcAge(birthYaer);
//     const retirement = 65 - age;


//     if (retirement > 0) {
//         console.log(`${firstName} retires in`)
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }

// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// const calcAvarage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAvarage(1, 2, 3));

// let scoreDolphins = calcAvarage(44, 23, 71);
// let scoreKoalas = calcAvarage(65, 54, 49);


// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas)
//         console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas} `);
//     else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins} `);
//     }
//     else { console.log(`Nobody wins`); }
// }


// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(1000, 100);

// scoreDolphins = calcAvarage(84, 54, 41);
// scoreKoalas = calcAvarage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020)
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'
// console.log(friends);
// const jonas = ['Jonas', 'Schmrdtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);


// //Exercise
// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages);


//add element
// const friends = ['Michael', 'Steven', 'Peter'];

// const newLength = friends.push('Jay');
// console.log(newLength);
// friends.unshift('john');

// //remove element

// friends.pop();

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
// friends.shift();
// console.log(friends);


// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))




const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])]
console.log(bills, tips, totals);