let num = [3,45,667,87,6]

// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }

//ForEach loop
num.forEach((b) =>{
    console.log(b*b)
})

// Array.from
let name =  "Harsh"
let cut = Array.from(name)
console.log(cut)

// for of
for (let i of num){
    console.log(i)
}

// for in
for (let j in num){
    console.log(j)
}