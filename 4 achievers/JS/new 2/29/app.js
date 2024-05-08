// //1.
// const obj = {
//   name: "Harsh",
//   age: 22,
//   setter: function () {
//     console.log(this.name + " and his age is " + this.age);
//   },
// };
// obj.setter();

//2.

// const obj2 = {
//   name: "Utkarsh",
//   rollno: 42,
// };

// function delroll() {
//   delete obj2.rollno;
// }
// delroll(obj2);
// console.log(obj2);

//3.

function salary(package) {
  if (package > 500000) {
    console.log("Dream Package");
  } else {
    console.log("Not a Dream Package");
  }
}
salary(60000);
