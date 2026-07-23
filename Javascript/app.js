console.log("Hello, World!");
 let greet = "variables cannot be redeclared with let but can be updated ";
 var name = "Variables declared with var can be redeclared and updated";
 const pi = "Constants declared with const cannot be redeclared or updated";

 //Datatypes = 2 ttypes of datatypes in javascript 
 // 1. Primitive Datatypes
 // 2. Non-Primitive Datatypes
 // in primmitive datatypes we have 7 types of datatypes
 // 1. String
 // 2. Number
    // 3. BigInt
    // 4. Boolean
    // 5. Undefined
    // 6. Null
    // 7. Symbol
//in non-primitive datatypes we have 1 type of datatype
// objects and functions are non-primitive datatypes
// objects are used to store collections of data and more complex entities. Functions are blocks of code designed to perform particular tasks and can be treated as objects in JavaScript.
const objectExample = {
    name: "John",
    age: 30,
}
console.log(objectExample.name); // Output: John

// Operations in JavaScript
// 1. Arithmetic Operations
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); // modulus 
console.log(a**b); // exponential
a++; //uniary operator a=a+1 pre increment - first print then change
--a; //post increment first change value then print 
b--; // b=b-1 
// Assignment Operator
// =,+=,-=,*=,/= %= 
// comparision Operator
console.log(a==b);
console.log(a!=b);
console.log(a===b); // equal and type
console.log(a!==b); //not equal to and type
// <,>,<=,>=
// Logical Operator
// And,Or,Not

// Conditional Statement 1.if
let ag=18;
if(ag>18){
    console.log("you can vote");
}

// 2.if-else
let age=18
if(age<16){
    console.log("You are teen")
}else {
    console.log("You are adult");
}
// 3.else-if statement
let agee=142;
if(age<18){
    console.log("Junior");
}else if(age>60){
    console.log("senoir");
}else{
    console.log("nothing");
}

//ternary operator
let agge = 18;
let result = agge >= 18 ? "adult" : "not adult";
console.log(result);

//question - 
// let num = prompt("enter a number");

// if(num%5 ===0){
//     console.log("5 is multiple of 5");
// }
// else{
//     console.log("5 is not multiple of 5");
// }
 
// for loops
for(let i=1;i<=5;i++){
    console.log("apna college");
}
//while loops
let i = 5;
while(i<=5){
    console.log("khushi");
    i++;
}
//do while 
do{
    console.log("k");
    i++;
}while(i<10);

// let gamenumber = 25;

// let userNum = prompt("Guess the game number : ");

// while(userNum !== gameNum){
//     prompt("youu enter wrong number");
// }
// console.log("congrats");

//String
let str = "Apna college";
console.log(str);
console.log(str.length);
console.log(str[0] );
// template literals
let speacialString = `This is template literals`;
console.log(speacialString);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice(0,4));
let set1 = "apna";
let set2 = "college";

let res = set2.concat(set1);
console.log(res);
console.log(str.replace("n","k"));
console.log(str.charAt(0));
