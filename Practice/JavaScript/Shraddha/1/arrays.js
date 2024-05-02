// Arrays //

// let marks = [95,98,85,83,53]
// console.log(marks)
// console.log(marks[2])
// console.log(marks.length)




// looping over an array //

// let heroes = ["harsh","vishal","divyansh","devesh","alok"]

// for(let ind=0;ind<heroes.length;ind++){
//     console.log(heroes[ind])
// }

// for(let hero of heroes){
//     console.log(hero)
// }
// for(let hero of heroes){
//     console.log(hero.toUpperCase())
// }





// Practice Question //

// 1. Find the average marks of stdents from an array

// let marks = [85,97,44,37,76,60]

//Using for loop
// let sum = 0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];    
// }
// console.log(sum)
// let avg = sum/marks.length;
// console.log(`Average of marks of students is ${avg}`)
 
// Using for of loop
// let sum = 0;
// for(let val of marks){
//     sum = sum+val;
//     // sum+=val;
// }
// let avg = sum/marks.length;
// console.log(`Average of marks of students is ${avg}`)



// 2. After applying 10% discount restore the values in the array.

// let items = [250,645,300,900,50]
// let i=0;
// for(let val of items){
//     let offer = val/10;
//     items[i]= items[i]-offer
//     i++
// }
// console.log(items)

// Using for loop
// for(let i = 0; i<items.length;i++){
//     let offer = items[i]/10;
//     items[i] = items[i]-offer;
// }
// console.log(items)






// Array Methods //

// let fooditems = [ "Mango","Banana","Papaya","Litchi"];
// console.log(fooditems);

// fooditems.push("Kela","Aam");
// console.log(fooditems);

// let deletedone = fooditems.pop();
// console.log(fooditems);
// console.log(deletedone);

// console.log(fooditems.toString());


// let marvel_heroes = ["thor","Hulk","Ironman"];
// let dc_heroes = ["Superman","Batman"];
// let indian_heroes = ["Bajarangbali ji","Hanuman ji"];

// let heroes = marvel_heroes.concat(dc_heroes, indian_heroes);
// console.log(heroes)



// let marvel_heroes = ["thor","Hulk","Ironman","Antman","Dr.Strange"];
// console.log(marvel_heroes.slice(1,3))

// let arr = [1,2,3,4,5,6,7,8,9]
// arr.splice(2,4,100,100,1001,1001,34,56,78,90)
// console.log(arr)



// Practice Question //

let arr = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

// Remove the first company from the array
// arr.shift()
// console.log(arr)

//Remove uber and add ola at its place
// arr.splice(2,1,"Ola");
// console.log(arr);

//Add Amazon at the end
arr.push("Amazon")
console.log(arr)

