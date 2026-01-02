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
