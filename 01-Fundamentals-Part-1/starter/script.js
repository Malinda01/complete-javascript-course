// 9. Values and Variables
/*
let js = "amazing";
console.log(40 + 20 + 10);

console.log("Malinda1");
console.log(25);

let firstname = "Malinda";
let lastname = "Amarakoon";

console.log(firstname + " " + lastname);


///// 10. Practice Assignment

let country = "Sri Lanka";
let continent = "Asia";
let populaiton = "17bil";

console.log(country);
console.log(continent);
console.log(populaiton);


// 11. Data Types

let JavascriptIsFun = true;
console.log(JavascriptIsFun);

console.log(typeof true);
console.log(typeof JavascriptIsFun);
console.log(typeof 22);
console.log(typeof "Malinda");

JavascriptIsFun = "YES!";
console.log(JavascriptIsFun);
console.log(typeof JavascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2001;
console.log(year);
console.log(typeof year);

console.log(typeof null);

// Data Types - Practice Assignments
let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


// 12. Let, Const and Var

let age = 30;
age = 31;

const birthYear = 2001;

var job = "programmer";
job = "doctor";

lastName = "Amarakoon";
console.log(lastName);

// Let, Const and Var - Practice Assignments
language = "Sinhala";
const isIsland = true;
*/

// 13. Basic Operators
/*
//math ops
const now = 2050;
const ageJonas = now - 2001;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// multiply, divide, exponent
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

// concatenation
const fName = "Malinda";
const lName = "Amarakoon";
console.log(fName + " " + lName);

// Assignment ops
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah > ageJonas);
console.log(ageSarah >= 40);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2019);
*/

// 14. Operator Precedence
/*
const now = 2050;
const ageJonas = now - 2001;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(now - 1991 > now - 2019);

let x, y;
x = y = 25 - 10 - 5;

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log("Average age: " + averageAge);
console.log(ageJonas, ageSarah);
*/

/*
// CODING CHALLLENEGE 1

let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;
let markHigherBMI = false;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("BMI Mark: " + BMIMark);
console.log("BMI John: " + BMIJohn);

if (BMIMark > BMIJohn) {
  console.log((markHigherBMI = true));
} else {
  console.log((markHigherBMI = false));
}

// 17. Strings and Template Literals
const firstName = "Malinda";
const job = "Engineer";
const birthYear = 2001;
const year = 2026;

// Old way
const malinda =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job;
console.log(malinda);

// Template literal
const malindaNew = `I'm ${firstName} a ${year - birthYear} years old ${job}`;
console.log(malindaNew);

console.log(`A regular string...`);

// multiline strings - old way
console.log(
  "String with \n\
multiple \n\
lines",
);

// multiple lines - Template Literal
console.log(`Strings
with
multiple 
lines`);
*/

/*
// 18. If-else decisions
const age = 10;

if (age >= 18) {
  console.log("Allowed ✅");
} else {
  const yearsLeft = 18 - age;
  console.log(`Not Allowed ❌, wait for ${yearsLeft} years`);
}

const birthYear = 1991;
let centurty;

if (birthYear <= 2000) {
  centurty = 20;
} else {
  centurty = 21;
}
console.log(`Century: ${centurty}`);
*/

/*
// CODING CHALLLENEGE 2
let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;
let markHigherBMI = false;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("BMI Mark: " + BMIMark);
console.log("BMI John: " + BMIJohn);

let message;
if (BMIMark > BMIJohn) {
  message = `Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`;
} else {
  message = `John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`;
}

console.log(message);
*/

// 20. Type Conversion and Coersion
// Type Conversion - Explicitly
// const inputYear = "2001";
// console.log(Number(inputYear) + 18);

// console.log(Number("Malinda"));
// console.log(typeof NaN); // number type

// console.log(String(23), 23);

// // Type Coercioin
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" + "10" + 3);

// let n = "1" + 1;
// console.log(n);
// n = n - 1;
// console.log(n);

// 21. Truthy and Falsy values
/*
console.log("Truthy and Falsy values");

// 5 falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Malinda"));
console.log(Boolean({})); //Empty object is true

const money = 100;
if (money) {
  console.log("Dont spend it all ;");
} else {
  console.log("You should get a job");
}

let height = 20;
if (height) {
  console.log(`Defined ${height}`);
} else {
  console.log("Undefined");
}
*/

// 22. Equality Operators
/*
console.log("Equality Operators - == vs ===");

const age = "18";
if (age === 18) console.log("You just became an adult - (strict)");

if (age == 18) console.log("You just became an adult - (loose)");

const fav = Number(prompt("What is your fav number?")); // explicit conversion
console.log(fav);
// console.log(typeof fav);

if (fav === 23) {
  console.log("Cool!!");
} else if (fav === 7) {
  console.log("Not bad!");
} else {
  console.log("Kind of bad!");
}

if (fav !== 23) {
  console.log("why not 23?");
}
*/

// 23. Boolean Logic
/*
console.log("23. Boolean Logic");
*/

// 24. Logical Operators
/*
console.log("24. Logical Operators");

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

const isTired = true;

console.log(hasDriversLicense && hasGoodVision && isTired);
*/

// CODING CHALLLENEGE 3
/* Write your code below. Good luck! 🙂

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else if (scoreKoalas === scoreDolphins) {
  console.log("Both win the trophy");
}
 */

// 26. Switch statement
/*
console.log("26. Switch statement");

const day = "sunday";

switch (day) {
  case "monday":
    console.log("JS course");
    break;
  case "tuesday":
    console.log("Python Course");
    break;
  case "wednesday":
  case "thursday":
    console.log("Lectures 1");
    break;
  case "friday":
    console.log("Day out");
  case "saturday":
  case "sunday":
    console.log("Chill");
    break;
  default:
    console.log("Not a valid day");
}

// Equivalent if/else structure
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/

// 27. Statements and Expressions
/*
console.log("27. Statements and Expressions");

console.log(3 + 4);
1991;
console.log(true && false && !false);

if (23 > 10) {
  const str = "23 is bigger";
  console.log(str);
}

console.log(`I'm ${2026 - 2001} years old now!`);
*/

// 28. The Conditional (Ternary) operator
/*
console.log("28. The Conditional (Ternary) operator");

const age = 25;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 🫗");

const drink = age >= 18 ? "Wine 🍷" : "Water 🫗";
console.log(drink);

// eq code for if/else
let drink2;
if (age >= 18) {
  drink2 = "I like to drink wine 🍷";
} else {
  drink2 = "I like to drink water 🫗";
}

console.log(drink2);

// template literals
console.log(`I like to drink ${age >= 18 ? "Wine🍷" : "Water 🫗"}`);
*/

// CODING CHALLENEGE 4
/*
const bill = 430;

const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
const finalBill = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${finalBill}`,
);
*/
