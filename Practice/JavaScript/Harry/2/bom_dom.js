// console.log(window)
// console.log(document)
// console.log(document.body )

////////////////////PRACTICE SET///////////////////

// PROBLEM 1. Use prompt and alert to tell whether someone can drive or not using a function (canDrive)

// let age = Number.parseInt(prompt("Enter your age"))
// let canDrive = (age)=>{
//     return age<=18?true:false
// }
// if(canDrive(age)){
//     alert("You cant drive")
// }
// else{
//     alert("Yes you can drive freely")
// }

//PROBLEM 2. Take input from user multiple times

// let runAgain = true;
// let canDrive = (age) => {
//   return age <= 18 ? true : false;
// };

// while (runAgain) {
//   let age = Number.parseInt(prompt("Enter your age"));

//   if (canDrive(age)) {
//     alert("You cant drive");
//   } else {
//     alert("Yes you can drive freely");
//   }
//   runAgain = confirm("Do you want to continue the age game?");
// }

//PROBLEM 3. In the previois question if age is negative , use console.error to show the error

// let runAgain = true;
// let canDrive = (age) => {
//   return age <= 18 ? true : false;
// };

// while (runAgain) {
//   let age = Number.parseInt(prompt("Enter your age"));
//   if (age<0){
//     console.error("Please enter a valid age")
//     alert("Please enter the valid age")
//     break;
//   }

//   if (canDrive(age)) {
//     alert("You cant drive");
//   } else {
//     alert("Yes you can drive freely");
//   }
//   runAgain = confirm("Do you want to continue the age game?");
// }


// // PROBLEM 4. Ask for a number and if number is greater than 4 then redirect the page to google.com

// let num = Number.parseInt(prompt("Enter a number"))

// if (num>4){
//     location.href = "https://google.com"
// }

// PROBLEM 5. Ask colour name to change the background colour of the page

// let colour = prompt("Enter the colour you want on background of the page")
// document.body.style.background = colour