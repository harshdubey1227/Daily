//
// conditional statements
// if-else

//falsy values

// let a=2+3+4*5-6
// let b=9*6/3+23
// if(a<b){
//     console.log("this is my first statement")
//     console.log("i'm inside if block")
// }
// else{
//     console.log("this is my second statement")
//     console.log("i'm inside else block")
// }

//
// ques=> even or odd

// let a = prompt("enter a number")
// // a= Number(a)
// if(a%2==0){
//     console.log("number is even")55
// }
// else{
//     console.log("number is odd")
// }

//
// ques=> number is divisible by 3 , 4 and 5

// let a = prompt("enter a number value")
// if (a%3==0 && a%4==0 && a%5==0){
//     console.log("number is divisible by 3 , 4 and 5")
// }
// else{
//         console.log("number is not divisible by 3 , 4 and 5")
// }

//
// ques=> sides of triangle will be input from user , check scalene or isoceles or equilateral

// let a = prompt("enter first number  side value")
// let b = prompt("enter second number side value")
// let c = prompt("enter third number side value")

// if ( a==b && b==c && c==a){
//     console.log("triangle is equilateral")
// }
// else if ( a!=b && b!=c && c!=a){
//     console.log("triangle is scalar")
// }
// else{
//     console.log("triangle is isoceles")
// }

//
//ques=> check given three sides can form triangle or not
// hint=> sum of any two sides > third side

// let a = prompt("enter side 1");
// a = Number(a);
// let b = prompt("enter side 2");
// b = Number(b);
// let c = prompt("enter side 3");
// c = Number(c);

// if (a + b > c && b + c > a && a + c > b) {
//   console.log("it will form a triangle");
//   if (a == b && b == c && c == a) {
//     console.log("triangle is equilateral");
//   } else if (a != b && b != c && c != a) {
//     console.log("triangle is scalar");
//   } else {
//     console.log("triangle is isoceles");
//   }
// } else {
//   console.log("It couldn't be a triangle");
// }


//
// ternary operator
// boolean expresssion ? "red" : "yellow"

// let num = 90;
// let a = num>90 ? "red" : "yellow" 
// console.log(a)


//
// ques> number is even or odd

let a = Number(prompt("enter a number"))
 result = a%2==0 ? "even " : "odd"
 console.log( "number is " + result )