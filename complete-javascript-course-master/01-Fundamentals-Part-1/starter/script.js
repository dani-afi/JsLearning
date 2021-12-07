// // //
// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // const firstName = "Daniel";
// // const secondName = "Afilipoaie";
// // console.log(firstName + " " + secondName);

// // let x = 10 + 5; // 15
// // x += 10; // x=x+10 =25
// // x *= 4; // x= x *4 =100
// // x++; // x=x+1
// // console.log(x);

// // console.log(ageJonas > ageSarah);



// // let markMass = 78;
// // console.log(markMass);
// // let markHeight = 1.68;
// // console.log(markHeight);
// // let johnMass = 92;
// // console.log(johnMass);
// // let johnHeight = 1.95;
// // console.log(johnHeight);

// // //TEST DATA 1
// // let bmiMark = markMass / markHeight ** 2;
// // console.log(bmiMark);
// // let bmiJohn = johnMass / johnHeight ** 2;
// // console.log(bmiJohn);

// // let markHigherBMI = bmiMark > bmiJohn;
// // console.log(markHigherBMI);

// // if (bmiMark > bmiJohn) {
// //     console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`)
// // } else { console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark}) `) }

// // const firstName = "Jonas";
// // const job = "teacher";
// // const birthYear = 1994;
// // const year = 2037;

// // const jonas = " I'm " + firstName + ", a " + (year - birthYear) + " years old  " + job + "!";
// // console.log(jonas);

// // const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// // console.log(jonasNew);


// // console.log(`Just a`)



// // const inputYear = '1991';
// // console.log(Number(input));
// // console.log(inputYear + 18);

// // const age = 18;
// // if (age === 18) console.log(`You just become and adult :D`);

// const hasDriversLicence = true;
// const hasGoodVision = true;

// // console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// // const shouldDrive = hasDriversLicence && hasGoodVision;

// if (hasDriversLicence && hasGoodVision) {
//     console.log(`She can drive!`)
// }
// else { console.log(`she is not able to drive!`) };

// const isTired = true;
// console.log(hasDriversLicence && hasGoodVision && isTired);
// if (hasDriversLicence && hasGoodVision && !isTired) {
//     console.log(`She can drive!`)
// }
// else { console.log(`she is not able to drive!`) };



// const game1Dolphins = 96;
// const game1Koalas = 88;
// const game2Dolphins = 108;
// const game2Koalas = 91;
// const game3Dolphins = 89;
// const game3Koalas = 110;

// let avgScoreDolphins = (game1Dolphins + game2Dolphins + game3Dolphins) / 3;
// console.log(avgScoreDolphins + " Dolphins");
// let avgScoreKoalas = (game1Koalas + game2Koalas + game3Koalas) / 3;
// console.log(avgScoreKoalas + " Koalas");

// if (avgScoreDolphins > avgScoreKoalas) {
//     console.log(`DOLPHINS WON`);
// } else if (avgScoreKoalas < avgScoreDolphins) {
//     console.log(`KOALAS WON`)
// }
// else if (avgScoreDolphins === avgScoreKoalas

// ) console.log(`was draw`);

// const game1Dolphins = 97;
// const game1Koalas = 109;
// const game2Dolphins = 112;
// const game2Koalas = 95;
// const game3Dolphins = 101;
// const game3Koalas = 123;

// let avgScoreDolphins = (game1Dolphins + game2Dolphins + game3Dolphins) / 3;
// console.log(avgScoreDolphins + " Dolphins");
// let avgScoreKoalas = (game1Koalas + game2Koalas + game3Koalas) / 3;
// console.log(avgScoreKoalas + " Koalas");

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins > 100) {
//     console.log(`DOLPHINS WON`);
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
//     console.log(`KOALAS WON`)
// }
// else if (avgScoreDolphins === avgScoreKoalas

// ) console.log(`was draw`);



// const day = 'sunday';

// switch (day) {
//     case 'monday': //day ==='monday'
//         console.log('Plan my course structure');
//         console.log('Go to coding meetup')
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!')

// }


// if (day === 'monday') {
//     console.log('Plan my course structure', 'Go to coding meetup');
// }
// else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// }
// else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// }
// else if (day === 'friday') {
//     console.log('Record videos');
// }
// else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend');
// }

// else { console.log('Not a valid day!'); };

// const age = 17;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water'
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)



const bill = 275;
const billAndTips = bill >= 50 && bill <= 300 ? bill * 1.15 : bill * 1.2;
console.log(`the total bill was ${bill} plus tips is ${billAndTips} and the tips is ${(billAndTips / bill) * 100 - 100} %`)