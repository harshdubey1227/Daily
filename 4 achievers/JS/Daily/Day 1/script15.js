//Apply, call , Bind
















//Callback function

function doSomething(fn) {
console.log("Hello Harsh")
    fn();
}

function eat() {
    console.log("Kuch kha le abhi")
    return 10;
}

function read() {
    console.log("padh le betaji")
}

doSomething(eat)
doSomething(eat())

doSomething(read)
