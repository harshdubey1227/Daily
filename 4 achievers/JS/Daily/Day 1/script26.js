// iife - immedietely invoked function

// (function (a,b,c){
//     console.log("hello world");
//     console.log(a+b+c);
//     console.log(c)

// })(100,23,"ram")

// Promises => pending, fulfilled, rejected

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let a = 5;
//         if(a>5){
//             reject("this function has failed")
//         }else{
//             resolve("this function has resolved")
//         }
//     }, 5000);
// })
// console.log(promise)
// promise
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))

// console.log(promise,"98098")

// FETCH //

// fetch("https://dummyjson.com/todos")
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log("Some err occured");
//   });

// Async Function //

async function print() {
  console.log("hello world");
  let pro = new Promise((resolve, reject) => {
    setTimeout(() => {
      let a = 90;
      if (a % 10 == 0) {
        resolve(true);
      } else {
        reject(false);
      }
    }, 2000);
  });
  return pro;
}
print();
