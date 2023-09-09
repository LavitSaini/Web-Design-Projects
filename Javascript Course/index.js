//  1.) External Javascript File

// Print in Console
console.log("Hello World");

// document.write("This is a Document");

// For Alerts
// alert("Hello Guys");

// For Warnings in Console
console.warn("This is a Warning");

// For Errors in Console
console.error("This is a Error");

//  Some Mathematical Operations in Console
console.log(
  "Any Mathematical Operation Performed Using Console.log",
  5 + 6,
  4 - 6,
  789 / 4
);

// Alert
// alert("Javascript");

// 2.) Variables in Javascript
var n1 = 56;
var n2 = 78;
console.log(n1 + n2);

console.clear();

// 3.) Datatypes in Javascript

//Integers and Floats
var a = 5;
var b = 7;

var f1 = 5.6;
var f2 = 7898.545;

// Strings
var str1 = "Hello World";
var str2 = "Javascript";
console.log(str1, str2);

// Characters
var ch1 = "A";
var ch2 = "B";

// Objects

var mark = {
  rahul: 56,
  harsh: 67,
  nitin: 78,
};
console.log(marks);

//Booleans

var x = true;
var y = false;
console.log(x, y);

// Undefined Variables

var d;
var c;
console.log(d, c);

// Null Variables

var n = null;
console.log(n);

/*

In Javascript Language, Two Types of Data types are there:

1.) Primitive Data types: Undefined, Null, Number, String, Boolean, Symbol

2.) Reference Data types: Arrays or Objects

*/

//Arrays

var arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0], arr[4]); // Array Elements Positioning Starting with Index[0]

console.clear();

// 4.) Operators in Javascript

// Arthmatic Operators
var p = 6;
var q = 4;
console.log("a + b =", p + q);
console.log("a - b =", p - q);
console.log("a * b =", p * q);
console.log("a / b =", p / q);

// Assignment Operators
var r = q;
r += 5;
r -= 6;
r *= 2;
r /= 2;
console.log(r);

// Comparison Operators
console.log(p == q);
r = p;
console.log(r >= p);

// Logical Operators

console.log("Logical Operators:");
// Logical OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Logical AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Logical NOT
console.log(!true);
console.log(!false);

console.clear();
// 5.) Functions in Javascript

// Average of Two Numbers Function in Javascript
// DRY = Do Not Repeat Yourself

function avg(m, n) {
  return (m + n) / 2;
}

var z1 = avg(6, 8);
var z2 = avg(56, 89);
console.log(z1, z2);

// 6.) Conditional Statements in Javascript

//if else

var i = 14;
if (i < 18) {
  console.log("You Cannot Drive");
} else {
  console.log("You Can Drive");
}

//Ladder if else

var marks = 24;

if (marks < 24) {
  console.log("Student is Fail");
} else if (marks >= 24) {
  console.log("Student is pass");
} else {
  console.log("Wrong Entry of Marks");
}

console.clear();

// Example with Function

function check(age) {
  if (age >= 18) {
    console.log("You Drink Rasna Water");
  } else {
    console.log("You Can Not Drink Rasna Water");
  }
}

l = check(22);
console.log(l);

// 7.) Loops in Javascript

// 1.) For Loop
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//For Driect Accessing of Any Array Elements
var array = [1.2, 5.5, 4, "C", 0, 7.9, "S"];
array.forEach(function (element) {
  console.log(element);
});

// 2.) While Loop
let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

// 3.) Do While Loop
let s = 0;
do {
  console.log(array[s]);
  s++;
} while (s < array.length);

console.log("Control Statements");

// 8.) Control Statements

//1.) Break Statement
console.log("Break Statement: ");
for (i=0; i < arr.length; i++) {
  if(i==3){
    break;
  }
  console.log(arr[i]);
}

// 2.) Continue Statement
var arrays = [2, 3, 5, 6, 7, 8, 9]
console.log("Continue Statement: ");
for (let o=0; o < 7; o++) {
  if(o==4){
    continue;
  }
  console.log(arrays[o]);
}
console.clear();

// Array Methods in Javascript

let myarr = [false, 'hello', 5.5, 8, 'A'];

// Array_Name.length Print the Length of Array
console.log(myarr.length);

//pop Decrease One Element From the Last of Array
myarr.pop();
console.log(myarr);

//push Add a new Element in the Last of Array
myarr.push("World");
console.log(myarr);

//shift Remove the first Element of Array
myarr.shift();
console.log(myarr);

//unshift is Used to Add a New Element in Front of Array and Return the new Array Length
myarr.unshift("Javascript");
console.log(myarr);
console.log(myarr.unshift("Javascript"));

// Array_Name.tostring is used to Convert Array Elements in String
myarr.toString();
console.log(myarr);

console.clear();

// Dates in Javascript

let mydate = new Date(); // new Keyword is Used here for Create New Date
console.log(mydate);
console.log(mydate.getHours());
console.log(mydate.getMinutes());
console.log(mydate.getSeconds());
console.log(mydate.getMilliseconds());

console.clear();

// DOM Manipulation in Javascript

// Get Any Element of Html with Id
let A = document.getElementById('click');
console.log(A);

// Get Any Element of Html with Class
let B = document.getElementsByClassName('box');
console.log(B);

// Use to Add Css Class in Html Element through Javascript
B[0].classList.add("bg-primary");

// Use to Remove Css Class in Html Element through Javascript
B[0].classList.remove("bg-primary");

// Use to Print InnerHtml of Html Elements
console.log(A.innerHTML);

// Use to Print InnerText of Html Elements
console.log(B[0].innerText);

console.clear();

// Access Html Elements With Help of Element Tag Name
var tn = document.getElementsByTagName('div');
console.log(tn);

let cre_ele = document.createElement('p');
cre_ele.innerText = "Hello My Friends";

tn[0].appendChild(cre_ele);








