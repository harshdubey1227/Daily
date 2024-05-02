// //Template literals
// let boy1 = "Harsh"
// let boy2 = "Anurag"
// //print -  Harsh is a friend of anurag
// let sentence = `${boy1} is a friend of ${boy2}`
// console.log(sentence)


// //Escape sequense characters
// let fruit = 'Bana\'na'
// let fruit2 = 'Man\nngo'
// let fruit3 = 'Man\tngo'
// let fruit4 = 'Man\rngo'
// console.log(fruit)
// console.log(fruit2)
// console.log(fruit3)
// console.log(fruit4)


//string length

// let name ="Harsh"
// let friend = "Vishal"
// console.log(name.length)

// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(1,4))
// console.log(name.slice(1))
// console.log(name.replace("Ha" , "Pa"))

// console.log(name.concat(" is a friend of ", friend, " samjhe ya nhi"))     //concat is used to add thr strings
// let friend2 =  "   Meena    "
// console.log(friend2.trim())       // trim is used to remove the space from a string



// Question : use a for loop to print a string

// let name = "Vishal"
// for(i=0;i<name.length;i++){
//     console.log(name[i])
// }
// for(let i in name){
//     console.log(name[i])
// }
// for(let char of name){
//     console.log(char)
// }


////////////////PRACTICE QUESTIONS//////////////////////

// Question 1: console.log("har\"".length)
// let name =  "Happ\""
// console.log(name.length)

// Question 2 : includes , startswith, endwith

// let sentence = "Harsh is a good boy"
// let word = "bad";
// let end = "boy"
// console.log(sentence.includes(word))
// console.log(sentence.startsWith(word))
// console.log(sentence.endsWith(end))

//Question 3 : Convert sring to lowercase

// let name = "HARSH"
// console.log(name.toLowerCase())

//Question 4 : Extract the amount from a string

// let str = "Please give  Rs 2500"
// let amount = Number.parseInt(str.slice(16))
// console.log(amount)
// console.log(typeof amount)

//Question 5 : Change the 4th letter of a string

let name = "Lallulaal"
name[3] ="Y"
console.log(name)  // => result will still be lallulal because strings are immutable which means we can not change the value of a string

