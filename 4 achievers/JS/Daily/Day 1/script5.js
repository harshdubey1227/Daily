// let a = Number(prompt("enter a number"))

// let a = 13;
// let flag = false;
// for(i = 2;i<=a-1; i++){
//     if(a%i == 0){
//        flag = true ;
//     }
// }

// if(flag == true){
//     console.log("it is not prime")
// }
// else{
//     console.log("it is prime")
// }

//
//fibonnaci series
//  let n = 11
// let firstTerm = 0
// let secondTerm = 1

// console.log(firstTerm)
// console.log(secondTerm)

// for(let i=3; i<n; i++){
//     nextterm = firstTerm + secondTerm
//     console.log(nextterm)

//     firstTerm = secondTerm;
//     secondTerm = nextterm;

// }

//
// Calculator => (using do-while)

// let choice;
// do {
//   let ch = prompt("Enter + ,-, *, / ");
//   let num1 = Number(prompt("Enter first number"));
//   let num2 = Number(prompt("Enter second number"));

//   switch (ch) {
//     case "+":
//       alert(num1 + num2);

//       break;
//     case "-":
//       alert(num1 - num2);

//       break;
//     case "*":
//       alert(num1 * num2);

//       break;
//     case "/":
//       alert(num1 / num2);

//       break;

//     default:
//       alert("invalid choice");
//       break;
//   }
//   choice = prompt("Enter 1 to continue");
// } while (choice == "1");

// console.log("that's it for now");

//
// Calculator => (using for)

// for(let choice = '1'; choice == '1' ; choice = prompt("Enter 1 to continue")) {
//   let ch = prompt("Enter + ,-, *, / ");
//   let num1 = Number(prompt("Enter first number"));
//   let num2 = Number(prompt("Enter second number"));

//   switch (ch) {
//     case "+":
//       alert(num1 + num2);

//       break;
//     case "-":
//       alert(num1 - num2);

//       break;
//     case "*":
//       alert(num1 * num2);

//       break;
//     case "/":
//       alert(num1 / num2);

//       break;

//     default:
//       alert("invalid choice");
//       break;
//   }

// console.log("Bas yhi tk tha jo tha");
// }

//
// Using while

while (true) {
  let ch = prompt("Enter + ,-, *, / ");
  let num1 = Number(prompt("Enter first number"));
  let num2 = Number(prompt("Enter second number"));

  switch (ch) {
    case "+":
      alert(num1 + num2);

      break;
    case "-":
      alert(num1 - num2);

      break;
    case "*":
      alert(num1 * num2);

      break;
    case "/":
      alert(num1 / num2);

      break;

    default:
      alert("invalid choice");
      break;
  }
  let choice = prompt("Enter 1 to continue");
  choice == '1';

  console.log("Bas yhi tk tha jo tha");
}
