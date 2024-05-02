// async function and event loop

// console.log("hello world");

// setTimeout(function(){
//     console.log("i am running after 5 sec")
// },5000)

// // next line will run earlier => async fn
// console.log("im second statement")

//  function print(){
//     console.log("im line 1")
//  }

//  console.log("im line 1.2")

//  setTimeout(() => {
//     console.log("im line 1.5")
//  },1500);

//  setTimeout(() => {
//     console.log("im line 2")
//  }, );

//  console.log("im line 3");
//  print();

//  setTimeout(() => {
//     console.log("im line 4")
//  }, 2000);

//  console.log("im line 5")

// 1.2 ,3,1,5,2,1.5,4 => result

let id = setInterval(() => {
  console.log("har 2 sec pe wapas aa jao");
}, 2000);

setTimeout(() => {
  console.log("newnew");
  clearInterval(id);
}, 8000);
