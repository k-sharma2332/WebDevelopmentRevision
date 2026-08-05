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
// Array - collection of items
let marks = [90,34,23,45,41];
let info = ["khushi",86,"Rishikesh"];
console.log(info);
//
// array is basically object
//Array indices = arr[0],arr[1]..........
console.log(marks[0]);
marks[0] = 45;
console.log(marks[0]);
// strings = immutable that means cant't change
// array = mutable that means change
//Looping over an array
// for loop = use length  for(let idx=0;idx<=ar.length;idx++){}
for(let idx=0;idx<marks.length;idx++){
    console.log(marks[0]);
}
// for of
for(let mark of marks){
    console.log(marks);
}
let sum=0;
for(let val of marks){
    sum+=val;
}
let avg = sum/marks.length;
console.log(avg);

// Array methods
// 1.push = add to end
// 2.pop = delete from end and return
// 3. toStrinf = converts array to string
// 4. concat = joind multiple array and return result
// 5. unshift = add to start
// 6. shift = delete from start and return
// 7. slice = return a piece of the array
// 8. Splice = change original array (add,rmove,replace)
let fooditems = ["grapes","bnana","lithici","apple"];
fooditems.pop();
console.log(fooditems);
fooditems.push("byy");
console.log(fooditems);
fooditems.toString();
console.log(fooditems);
let marvel = ["thor","spiderman","antman","drstrange"];
let dchero = ["batman","ironman"];

let heros = marvel.concat(dchero);
console.log(heros);

marvel.shift();
console.log(marvel);
marvel.unshift();
console.log(marvel);
console.log(marvel.slice(1,3));
console.log(marks.splice(2,2,101,122));


// functions = block of code designed to perform a particular task
function myFunction(MSG) { //PARAMETER = INPUT
    console.log(MSG);
}
myFunction("this is my function"); // function call
//it prevent from writing same code again and again redundacy

function sm(a,b){ //local variable - > scope
    console.log(a+b);
}
sm(19,34); //ARGUMENT = INPUT

//Arrow functions comapct way of writing a function
// const functionName = (a,b) => {
    
// }
// const arrowsm = (a,b) => {
//     console.log(a+b);
// }

// arrowsm(2,3);

// function countVowels(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     return count;
// }
// // for each loop in Array - arr.ForEach(callBackfunction)
// // callbackFuntion: here, it is a funtion to execute for each element in the array
// // A callback is a function passed as an argument to another funtion
// let ar = [1,2,3,4,5];

// arrowsm.forEach((val,idx)=>{
//     console.log(val,idx);
// })

// // map method - creates new array with the result of some operation. The value its callback returns are used to form new array
// let num = [32,43,54,45];
// nums.map((val) => {
//     console.log(val);
// });

// let newArr = nums.map((val) => {
//     return val*2;
// });
// console.log(newArr);

// // filter method = create a new array of element that give true for a condition

// let evern = nums.filter((val)=>{
//     return val>3;
// });
// console.log(evenArr);


// // reduce = perform some operations amd reduces the array to a single value. it return that single calue
// const output = nums.reduce((res,cur)=>{
//     return res+cur;
// })
//  console.log(output);
// console.log(window.document);

// DOM(Document Object Model) - When a web page is laoded, the browser creates a document object model of the page.
// Basically it's a method to access html into javascript file in which we can see the window , document , html , head, body , and what inside them.
// DOM Manipulation - 
// SELECTING WITH ID : const Id = document.getElementById("ID")
// SELECTING WITH CLASS : document.getElementsByClassName("myClass") - return html collection
// SELECTING WITH TAG : document.getElementsByTagName("p")
// Query selector
// document.querySelector("myId/myClass/tag") - return first element
// document.querySelectorAll("myId/myClass/tag") - return a Nodelist

// Properties 
// tagName - return tag for element node
// innerText - return the text content of the element and all its children
// innerHTML - return the plain text or HTML content in the element
// textContent - return textual content even for hidden element

let newBtn = document.createElement("button");
newBtn.innerText = "Click me";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

// Attributes
// getAttribute(attr) - get the attribute value
// setAttribute(attr,value) - to set the attribute value
// style 
// node.style - div.style.backgroundcolor = "green"
// Insert element - let el = document.createElement("div")
// node.append(el) - adds at the end of node(inside)
// node.prepend(el) - adds at the start of node(inside)
// node.before(el) - adds before the node(outside)
// node.after(el) - adds after the node(outside)\
// Delete Element
// node.remove() // remove the node

//Events in js - The change in the state of an object is known as an event
// Mouse event, keyboard event, form event, print event




// Js handling
let btn1 = document.querySelector("#btn1");
// btn1.onClick = () =>{
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a) //26
// };

// let box = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("You are inside a div");
// }


btn1.addEventListener("click",(evt) =>{
    console.log("button1 was clicked- handler1");
    console.log(evt);
});

btn1.addEventListener("click",() => {
    console.log("button1 was clicked - handler2");
});
const handler3 = () => {
    console.log("button1 was clicked - handled3");
}

btn1.removeEventListener("click",()=>{
    console.log("button was click");
})


//classes and objects
//objects are instances of classes. A class is a blueprint for creating objects. It defines the properties and methods that the objects created from the class will have. In JavaScript, classes were introduced in ECMAScript 6 (ES6) and provide a more structured way to create objects and deal with inheritance.
const student = {
    name: "khushi",
    age: 20,
    marks: 85,
    printMarks: function(){
        console.log("Marks printed", this.marks); //this means the current object
    }
}

// Prototype in javascript is a mechanism by which objects can inherit properties and methods from other objects. Every JavaScript object has an internal property called [[Prototype]], which refers to another object. This prototype object can have its own properties and methods, and when you try to access a property or method on an object, JavaScript will look for it on the object itself first, and if it doesn't find it, it will look up the prototype chain until it finds the property or reaches the end of the chain (null).
const employee = {
    caltax() {
        console.log("tak rate");
    },
    calctax2: function() {
        console.log("tax rate 2");
    }
};

const manager = {
    salary: 50000,
}

manager.__proto__ = employee; // Setting the prototype of manager to employee

//classes in javascript -  classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JavaScript are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
class Toyata{
    constructor(){
        this.name = "fortuner";
        this.model = 2023;
    }
    start(){
        console.log("car started");
    }
    stop(){
        console.log("car stopped");
    }
}

let fortuner = new Toyata();

//ineheritence
class parent{
    constructor(){
        this.name = "parent";
    }
    hello(){
        console.log("hello from parent");
    }
}

class child extends parent{
    constructor(){
        super(); // Call the parent class constructor
  
        this.name = "child";
    }
    hi(){
        console.log("hi from child");
    }
}
let obj = new child();
obj.hi();
obj.hello();

let e = 5;
let f = 10;
console.log(e);
console.log(f);
try{
    console.log(e+d);
}catch(err){
    console.log("error occured",err);
}
 //error so we use error handling because d is not definedand after that all other line also can't work
console.log(e-f);
console.log(e*f);
console.log(e/f);
console.log(e%f);
console.log(e**f);

