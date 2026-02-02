// 33. Activating strict mode
/*
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio"; // will throw an error
// const private = 333; // will throw an error
*/

// 34. Functions //
/*
// No parameter
function logger() {
  console.log("My name is Malinda");
}

logger(); // function invoking, calling, running
logger();

// With parameters
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples, ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);
*/

// 35. Function Declaration vs Expression
/*
// Functio declaration
function calcAge1(birthYear) {
  return 2026 - birthYear;
}

age1 = calcAge1(2001);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2026 - birthYear;
};

console.log(calcAge2(2000));
*/

// 36. Arrow Functions
/*
// Function Expression
const calcAge2 = function (birthYear) {
  return 2026 - birthYear;
};

// Arrow function
const caalcAge3 = (birthYear) => 2026 - birthYear;
console.log(caalcAge3(2001));

// multiple params
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2026 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(2001, "Malinda"));
console.log(yearsUntilRetirement(2003, "Pathushi"));
*/

// 37. Function calling other functions
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with "${applePieces}" apples, "${orangePieces}" oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

// 38. Reviewving function
/*
const calcAge = function (year) {
  return 2026 - year;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired🍻`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2001, "Malinda"));
console.log(yearsUntilRetirement(1970, "Saman"));
console.log(yearsUntilRetirement(1800, "Sri Wickrama Rajasinghe"));
*/

// 40. Introduction to Arrays
/*
const friend1 = "Malinda";
const friend2 = "Greshan";

const friends = ["Malinda", "Pathushi", "Steven", "Peter"];
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
// Replace an item
friends[2] = "Grey";
console.log(friends);

console.log("\n");

const year = new Array(2001, 2002, 2003);
console.log(year);

const fName = "Malinda";
const malinda = [fName, "Amarakoon", 2026 - 2001, friends];
console.log(malinda);

// Exercise
const calcAge = function (birthYear) {
  return 2026 - birthYear;
};
const years = [2001, 2002, 2003, 2004, 2005];
// console.log(calcAge(years)); - NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);

console.log(`Ages are, ${age1}, ${age2}, ${age3}`);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages);
*/

// 41. Basic Array Operation
/*
const friends = ["Malinda", "Pathushi", "Steven", "Peter"];

// Add - at end
const newLength = friends.push("Jacobs", "Json");
console.log(friends);
console.log(newLength);

// Add - at begin
friends.unshift("Stathon", "Clarissa");
console.log(friends);

// Remove - last
const popped = friends.pop();
console.log(friends);
console.log(popped);

// Remove - first
friends.shift();
console.log(friends);

// Index of an element
console.log(friends.indexOf("John"));

console.log(friends.includes("Malinda"));

if (friends.includes("Malinda")) {
  console.log("You have a friend!!");
}
*/
// Coding excercise
/* Write your code below. Good luck! 🙂 */
/*
const calcTip = function (bill) {
  let tip_val = 0;

  if (bill >= 50 && bill <= 300) {
    tip_val = (bill * 15) / 100;
  } else {
    tip_val = (bill * 20) / 100;
  }

  return tip_val;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`Bills are: ${bills}`);
console.log(`Tips are: ${tips}`);
console.log(`Total Bills are: ${totals}`);
*/

// 43. Introduction to objects
