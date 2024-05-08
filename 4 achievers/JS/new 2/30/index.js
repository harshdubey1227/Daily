// function Person(first, last, age) {
//   this.FirstName = first;
//   this.LastName = last;
//   this.age = age;
// }

// const yourFather = new Person("Aman", "Singh", 50);
// const yourMother = new Person("Anjali", "Singh", 49);

// console.log(
//   "Your father's name is " +
//     yourFather.FirstName +
//     " " +
//     yourFather.LastName +
//     " and his age is " +
//     yourFather.age
// );

// // document.write(
// //   "Your father's name is " +
// //     yourFather.FirstName +
// //     " " +
// //     yourFather.LastName +
// //     " and his age is " +
// //     yourFather.age
// // );

// document.getElementById("naam").innerText =
//   "Your father's name is " +
//   yourFather.FirstName +
//   " " +
//   yourFather.LastName +
//   " and his age is " +
//   yourFather.age;

// FORM VALIDATION

// function myFunction() {
//   let x = document.getElementById("numb").value;
//   let text;
//   if (isNaN(x) || x < 1 || x > 10) {
//     text = "Input not valid";
//   } else {
//     text = "Input is valid";
//   }
//   document.getElementById("demo").innerHTML = text;
// }
function myFunction() {
  let x = document.getElementById("numb").value;
  let text;
  if (x.length < 2) {
    text = "Input not valid";
  } else {
    text = "Input is valid";
  }
  document.getElementById("demo").innerHTML = text;
}
