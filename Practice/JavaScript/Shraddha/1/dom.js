// // alert("Ka re")

// // DOM manupulation
// //Selecting with id
// let heading = document.getElementById("heading"); //h1
// console.dir(heading)

// //Selecting with class
// let heading2 = document.getElementsByClassName("heading2")
// console.dir(heading2)
// console.log(heading2)

// //Selecting with tag
// let para = document.getElementsByTagName("p")
// console.log(para)

// //Query Selector
// let firstel = document.querySelector("p")
// console.dir(firstel)
// console.log(firstel)
// let allel = document.querySelectorAll("p")
// console.dir(allel)
// console.log(allel)






// PRACTICE//

//1.Append "from apna college in h2"

// let h2 = document.querySelector("h2")
// console.dir(h2.innerText)

// h2.innerText = h2.innerText + " from Youtube"


// 2. 3 divs with common classname-"box", access them and add some text to them

// let divs = document.querySelectorAll(".box")
// console.log(divs)

// divs[0].innerText = "Happy Birthday";
// divs[1].innerText = "Happy Birthday Harsh";
// divs[2].innerText = "Happy Birthday bhola";

// let idx = 1
// for(div of divs){
//     div.innerText = `new unique value ${idx}`
//     idx++
// }







// atributes //

// let div = document.querySelector("div")
// console.log(div)

// let id = div.getAttribute("id")
// console.log(id)




// DOM Manipulation //


// INSERTION OF ELEMENTS 

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn)
// div.prepend(newBtn)
// div.before(newBtn)
// div.after(newBtn)



// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i> Hi , I am New</i>";

// document.querySelector("body").prepend(newHeading);


// // DELETION OF ELEMENT

// let para = document.querySelector("p")
// para.remove();
// newHeading.remove();






//Practice questions // 

// 1. create a new button give it a text " click me", bg color of red and text color of white.

// let newbtn = document.createElement("Button");
// newbtn.innerText = "Click me please";
// newbtn.style.backgroundColor = "red"
// newbtn.style.color = "white"

// document.querySelector("body").prepend(newbtn)


//2. create a p tag , give it class and style
//now create a new class in css and try to apend this class to <p> element

let para = document.querySelector("p");

para.classList.add("newClass")