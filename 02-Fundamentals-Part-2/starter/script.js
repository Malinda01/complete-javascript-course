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
