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
const arrowsm = (a,b) => {
    console.log(a+b);
}

arrowsm(2,3);

function countVowels(str){
    let count=0;
    for(const char of str){
        if(char==="a"|| char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    return count;
}
// for each loop in Array - arr.ForEach(callBackfunction)
// callbackFuntion: here, it is a funtion to execute for each element in the array
// A callback is a function passed as an argument to another funtion
let ar = [1,2,3,4,5];

arrowsm.forEach((val,idx)=>{
    console.log(val,idx);
})

// map method - creates new array with the result of some operation. The value its callback returns are used to form new array
let num = [32,43,54,45];
nums.map((val) => {
    console.log(val);
});

let newArr = nums.map((val) => {
    return val*2;
});
console.log(newArr);

// filter method = create a new array of element that give true for a condition

let evern = nums.filter((val)=>{
    return val>3;
});
console.log(evenArr);


// reduce = perform some operations amd reduces the array to a single value. it return that single calue
const output = nums.reduce((res,cur)=>{
    return res+cur;
})
 console.log(output);

 