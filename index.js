// console.log("Hello world");

// variables and values in javascript

// var myName="Anil Sigdel";
// var myAge=26;
// console.log(myAge);

// // var _myName = "Radhka sigdel";
// var _1my__Name = "Anusha sigdel";
// // var 1myName = "technical";
// var $myName = "Ananta prasad sigdel";
// // var myNaem% = "Sigdel Technical";

// console.log(_1my__Name);
// // console.log($myName);



// Datypes in javascript

// var myName = "Anil Sigdel";
// console.log(myName);                   string

// var myAge=26;
// console.log(myAge);                   numbers

// var iamAnil= true;
// console.log(iamAnil);                 boolean           


// types of operator

// console.log(typeof(iamAnil));


// Datatypes Practise 

// 10 + "20"
// // console.log(10 + "20");      it concates 1024
// 9 - "5"
// // console.log(9 - "5");        = 4
//    bug    

// "java" + "script"
// console.log("java " + "script");

// console.log("Anil " - "Sigdel");   if we minus two string then we gets NaN (Not a Number)

// // " " + " "
// console.log(" " + " ");         blank + blank = blank
// " " + 0
// console.log(" " + 0);            blank + 0 = 0
// "Anil" + "Sigdel"
// console.log("Anil " + "Sigdel");
// true + true                 
// console.log(true + true);   In js true = 1 and false = 0 
// true + false
// console.log(true + false);
// false - true
// console.log(false - true);       0 -1 = -1

// console.log("Anil" - "Sigdel");        it is a NaN(Not a Number)

// var x = 2;
// var y = 3; 
// console.log(x + y);


// var iamAnil = null;
// console.log(iamAnil);
// console.log(typeof(iamAnil));
// 2nd javascript bug

// var iamSigdel;
// console.log(iamSigdel);
// console.log(typeof(iamSigdel));



// Interview question 2 
// what is a NaN?

// NaN is a property of the global Object.
// In other words , it is a variable in a global scope.
// The initial value of NaN  is Not-A-Number


// var myPhoneNumber = 9842610575;
// var myName = "Anil Sigdel";

// console.log(myPhoneNumber);
// console.log(myName);

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("please enter valid phone numbers");
// }



// NaN practice 


// NaN === NaN             = false
// Number.NaN === NaN      = false
// isNaN(NaN)              = true
// isNaN(Number.NaN)       = true
// Number.isNaN(NaN)       = true

// console.log(Number.isNaN(NaN)); 

// Operators

// 1. An Assignment operator assigns a value to its left operand 
// based on  the value of its right operand 
// The simple assignment operator is equal (=)


// let x = 5;
// let y = 10;
// console.log(x == y);
// console.log(y += 5);
// console.log(y -= 5);
// console.log(y *= 5);
// console.log(y /= 5);
// console.log(y %= 5);



// var x = 5;
// var y = 5; 
// console.log("Is both the x and y are equal or not" + x === y);
// console.log(x === y);
// console.log(`Is both x and y are equal : ${ x === y }`); 

// 2.  Arithmetic operator
// An Arithmetic operators takes a numerical values 
// (either literals or Variables ) as their operands 
// returns a single numerical value 

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*3);

// var x = 5;
// var y = 5; 
// console.log(x+y);

// console.log('Remainder operator = ' + 27%4);

// Increament operator 

// var num = 15;
// var newnum = num++ + 5;        
// console.log(num);
// console.log(newnum);

// var num = 15;
// var newnum = num++;        
// console.log(num);
// console.log(newnum);

// var num = 15;
// var newnum = num--;        
// console.log(num);
// console.log(newnum);

// var num = 15;
// var newnum = ++num + 5; 
// console.log(num);
// console.log(newnum);

// var num = 15;
// var newnum = --num;        
// console.log(num);
// console.log(newnum);


//3. A comparision operators compares its operands and 
// returns a logical value based on wheather the comparision is true  

// var x = "30";
// var y = 30;
                        
// console.log(x * y);

// var x = 10
// var y = 2

// console.log(x*2 + 2 );

// var a = 30;
// var b = 10;

// console.log(a === b);
// console.log(`Is both the a and b are equal: ${a === b}`);  js es6 2015


// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

// let x = 5;
// let y = 10; 

// let z = x + y;

// console.log(z)


//4.  Logical operator
// Logical operator are typically used with Boolean (Logical ) values;
// when they are, they return a boolean value

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The Logical AND (&&) Operator (Logical Conjuction) for a set of 
// operands is true if and only if all of its operands are true
//console.log(a>b && b>0 && b<0);
// console.log(a>b && b>-50 && b<0)  All expresion must be true for true 

// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands are true

// console.log((a<b) || (b>0) || (b>0));   all three false so false 
// console.log((a<b) || (b>-50) || (b>0)); any one is true then result is true in OR OPERATOR 

// Logical NOT (!)
// The Logical NOT (!) operator (Logical Complement , negation)
// takes truth to falsity and vice versa

// console.log(!(a>0) || !(b<0));
// console.log(!((a>0) || !(b<0)));   it makes negation , complement
// console.log(!true);
// console.log(!false);

//5. String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together,
// returning another string that is the union of the two operand strings 

// console.log("Hello world");
// console.log("Hello" + " world");

// var myName = "Anil";

// console.log(myName  + " Sigdel");
// console.log(myName  + " Prasad Sigdel");

// Challenge Time 

// console.log(2**3);  // output 2*2*3
// console.log(3**4);    // output 3*3*3*3

// Write a program to swap two numbers 

// var a = 5;
// var b = 10;

// // output must be a = 10;   b = 5; 

// var c = a;
// a = b;
// b = c;

// console.log("The value of a is : "  +a);
// console.log("The value of b is : "  +b);

// write a program to swap two numbers  without using third variables

// var x = 20;
// var y = 15;

// x = x + y;    //35
// y = x - y;    //20
// x = x - y;    //15


// console.log(x);
// console.log(y);


// Interview Question
// what is the difference between == and ===  

// the major difference is == only checks the value it doesnot 
// care about what datatypes it belongs to 

// // var num1 = 10;
// var num2 = '10';

// console.log(typeof(num1));   // numbers
// console.log(typeof(num2));    // string

// console.log(num1==num2);  // result true


// var num1 = 10;
// var num2 = '10';

// console.log(typeof(num1));   // numbers
// console.log(typeof(num2));    // string

// console.log(num1===num2);  // result false


/*** Control Statement */
// The if statement executes  a statement if a specified condition is truthy
// if the statement is falsy , another  statement can be executed

// var tomr = "rainy";
// if(tomr == "rainy"){
//     console.log("take a raincoat");
// }
// else{
//    console.log("No need to take a raincoat"); 
// }

// var tomr = "sunny";
// if(tomr == "rainy"){
//     console.log("take a raincoat");
// }
// else{
//    console.log("No need to take a raincoat"); 
// }


//****  Section 6  Control Statement -

//* 1 If Else  */
// The if statement executes a statement if a specified condition is truthy.
// If the condition is falsy , another statement can be executed.

// var tomr = "Sunny";

// if(tomr == "Rainy"){
//     console.log("take a raincoat");
// }else{
//     console.log("No need to take a raincoat");
// }

// Challenge Time 
// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days , leap years have 366, with an extra day in february. 

// var year = 2020;
// debugger;
// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if (year % 400 === 0){
//             console.log("The year " + year + " is a leap year");
//         }
//         else{
//             console.log("The year " + year + " is not a leap year");
//         }

//     }
//     else{
//         console.log("The year " + year + " is a leap year");
//     }

// }
// else{
//     console.log("The year " + year + " is not a leap year");
// }


// //  What is truthy and falsy values in javascript?
// //  we have total 5 falsy values in javascript
// //    0, "", undefined, null, NaN, false** is false 

// //What is truthy and falsy values in javascript?

// // if(score = ""){
// //     console.log("OMG, we loss the game");
// // }
// // else{
// //        console.log("yay, you won the game ");
// // }


// // if(score = undefined){
// //     console.log("OMG, we loss the game");
// // }
// // else{
// //        console.log("yay, you won the game ");
// // }

//   // 2. Conditional (ternary) operator 

// //   The conditional (ternary) operator is the only javascript operator that takes 
// //   only three operands .

// // var age = 17;
// // if(age >= 18){
// //     console.log("you are eligible to vote");
// // }else{
// //     console.log("you are not eligible to vote");
// // }

// // var age = 17;
// // console.log((age >= 18)? "you can vote": "you cannot vote");

// // 3. Switch Statement
// // Evaluates an expression , matching the expression's value to a 
// // case clause , and executes statements associated with that case.

// // 1st without break statement
// // Find the Area

// // console.log(4**4);

// var area = "circle";
// var PI = 3.142, l = 5, b = 4, r = 3;
// if(area = "circle"){
//     console.log("The area of circle is : " + PI*r**2);
// }else if(area = "triangle"){
//    console.log("The area of triangle is : " + (l*b)/2);
// }else if(area = "rectangle"){
// console.log("The area of rectangle is : " + (l*b));
// }else{
//     console.log("please enter valid data");
// }

// / console.log(20+6);

// //find the area of circle, triangle, rectangle?

// // var area = "triangle";
// // var PI = 3.142, l = 5, b = 3, r = 2;

// // if(area == "circle"){
// //       console.log("The area of the circle is : " + PI*r**2);
// // }else if(area == "triangle"){
// //     console.log("The area of the triangle is : " + (l*b)/2);
// // }else if(area == "rectangle") {
// //      console.log("The area of the rectangle is : " + (l*b));
// // }else{
// //     console.log("please enter valid data");
// // }

// var area = "square ";
// debugger;
// var PI = 3.142, l= 5, b = 3, r = 2;

// if(area == "circle"){
//       console.log("The area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//     console.log("The area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle") {
//      console.log("The area of the rectangle is : " + (l*b));
// }else{
//     console.log("please enter valid data");
// }

// console.log(20+6);

//find the area of circle, triangle, rectangle?

// var area = "triangle";
// var PI = 3.142, l = 5, b = 3, r = 2;

// if(area == "circle"){
//       console.log("The area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//     console.log("The area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle") {
//      console.log("The area of the rectangle is : " + (l*b));
// }else{
//     console.log("please enter valid data");
// }

// var area = "square ";
// debugger;
// var PI = 3.142, l= 5, b = 3, r = 2;

// if(area == "circle"){
//       console.log("The area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//     console.log("The area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle") {
//      console.log("The area of the rectangle is : " + (l*b));
// }else{
//     console.log("please enter valid data");
// }

// var area = "circle";
// var PI = 3.142, l= 5, b = 3, r = 2;

// switch(area){
//     case "circle":
//         console.log("The area of the circle is : " + PI*r**2);
        
         
//         case "triangle":
//         console.log("The area of the triangle is : " + (l*b)/2);
        
    
//         case "rectangle":
//             console.log("The area of the rectangle is : " + (l*b));
            

//             default:
//                 console.log("please enter valid data");
// }


// drawback of above switch statement is that it prints all the case  so we have 
//   break 
//   Terminates the current loop , switch , or label
//   statement and transfers 
//   program control to the statement following the terminated statement.

// var area = "triangle";
// var PI = 3.142, l= 5, b = 3, r = 2;

// switch(area){
//     case "circle":
//         console.log("The area of the circle is : " + PI*r**2);
//         break;
           
//         case "triangle":
//         console.log("The area of the triangle is : " + (l*b)/2);
//         break;

//         case "rectangle":
//             console.log("The area of the rectangle is : " + (l*b));
//             break;
        
//             default:
//                 console.log("please enter valid data");
// }

// 4. While Loop Statement 
// The while statement creates a loop that executes a specified statement 
// as long as the test condition evaluates to true 

//  var num = 10;

//  while(num <= 20){
//     console.log(num);   
//     num++;
//  }


//  var num = 20;
// // block scope  20 is not less than 10 so it doesnot goes to block
//  while(num <= 10){
//     console.log(num);   
//     num++;
//  }

// var num = 20;
// while(num >= 10){
//     console.log(num);     //infinite loop 
//     num++;
// }

// var num = 600;
// // block scope      var num = 600 only enter to block scope when only condition is true 
//  while(num <= 500){
//     console.log(num);   
//     num++;
//  }

   // 5. do while loop
// it executes first statement even condition is false 
// then after only it checks condition

//  var num = 50;

//  do{
//     console.log(num);
//     num++;
//  }while(num >= 100)

// var num = 99;

//  do{
//     console.log(num);   // infinite loop
//     num++;
//  }while(num >= 100)    

// var day;
// switch (new Date().getDay()) {
//    case 0:
//       console.log("Today is sunday");
//       break;
      
//       case 1:
//          console.log("Today is monday");

//       case 2:
//             console.log("Today is Tuesday ");
//       break;

//       case 3:
//          console.log("Today is Wednesday ");
//       break;
      
//       case 4:
//          console.log("Today is Thursday ");
//       break;

//       case 5:
//          console.log("Today is friday");
//       break;

//       case 6:
//          console.log("Today is saturday ");
//       break;
// }

// again practice of leap year

// var year = 2100;

// if(year % 4 == 0){
//     if(year % 100 == 0){
// if(year % 400 == 0){
//     console.log("The year " + year + " is a leap year");
// }
// else{
//     console.log("The year " + year + " is not a leap year");
// }
// }
// else{
//         console.log("The year " + year + " is a leap year");
// }
// }
// else{
//     console.log("The year " + year + " is not a leap year");
// }


// var day;

// switch(new Date().getDay())
// {                             
//    case 0:
//     console.log("Sunday");
//     break;

//     case 1:
//     console.log("Monday");
//     break;

//     case 2:
//     console.log("Tuesday");
//     break;

//     case 3:
//     console.log("Wednesday");
//     break;

//     case 4:
//     console.log("Thursday");
//     break;

//     case 5:
//     console.log("Friday");
//     break;

//     case 6:
//         console.log("Saturday");
//         break;   
// }

//6. for loop


// for(var num = 10; num <= 20; num++){
//     console.log(num);
// }

// for(var num = 20; num > 10; num++){
//     console.log(num);     //infinite loop
// }


//Challenge Time
//program to print table for a given number (8, 9, 12)

 

// var tableOf = 8;
// for(var num = 1; num <= 10; num++){
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }

// var tableOf = 12;
// for(var num = 1; num <= 10; num++){
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }


// let today = new Date();
//    console.log(today);

// Create a new Date object
// var currentDate = new Date();

// Get the current date in a readable format
// var formattedDate = currentDate.toDateString();

// Print the current date in the console
// console.log("Today's date is: " + formattedDate);



// var day;

// switch(new Date().getDay())
// {                             
//    case 0:
//     console.log("Sunday");
//     break;

//     case 1:
//     console.log("Monday");
//     break;

//     case 2:
//     console.log("Tuesday");
//     break;

//     case 3:
//     console.log("Wednesday");
//     break;

//     case 4:
//     console.log("Thursday");
//     break;

//     case 5:
//     console.log("Friday");
//     break;

//     case 6:
//         console.log("Saturday");
//         break;   
// }

// 


// var num = 1;

// if (num < 0) {
//   console.log("The number " + num + " is a negative number");
// } else {
//   console.log("The number " + num + " is non-negative or positive");
// }

//**** Function in Javascript */

console.log("Hello World")
console.log("Anil" + "sigdel")
