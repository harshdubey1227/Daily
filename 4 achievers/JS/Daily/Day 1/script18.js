console.log("Hello Lallulaal...")


// traverse => to visit the elements one by one
// let arr = [1,2,3,4,5]

// function print(ele) {
//     console.log(ele+ " : hello")
// }
// arr.forEach(print)

// arr.forEach(element => {
//     console.log(element+ " : hello bro")
// });


//REDUCE FUNCTION => single value output

// let arr = [1,2,3,4,5,6,7]

// let res = arr.reduce(function (prevValue , ele) {
//     let sum = prevValue + ele;
//     return sum;
// })
// console.log(res)


// let arr2 = [1,2,3,4,5,6,7]

// let res2 = arr.reduce(function (prevValue , ele) {
//     let sum = prevValue + ele;
//     return sum;
// },10 )
// console.log(res2)


// let arr3 = [22,34,56,87,98]

// let max = arr3.reduce(function (prev , cur) {
//     return prev<cur?cur:prev
// },-9999)
// console.log(max)

// let max = arr3.reduce(function (prev , cur) {
//     if(prev>cur){
//         return prev
//     }
//     else{
//         return cur
//     }
// })
// console.log(max)


// FILTER FUNCTION 

// let arr = [22,34,56,87,98]

// let finalarr = arr.filter(function (ele) {
//     if(ele%2==0){
//         return ele
//     }
// })

// console.log(finalarr)

let arr = [ "111", "2345","45678","345366"]
let finalarr = arr.filter(function (ele) {
    if (ele.length>=4){
        return ele
    }   
})
console.log(finalarr)