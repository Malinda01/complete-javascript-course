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
