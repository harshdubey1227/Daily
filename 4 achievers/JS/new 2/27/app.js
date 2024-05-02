console.log("Hello World");

function ShowTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();


    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").style. = time;

    setTimeout(ShowTime, 1000);
}
ShowTime();

function ShowDate() {
  var date = new Date();
//   var d = date.getDate();
//   var m = date.getMonth();
//   var y = date.getYear();

//   var time = d + "/" + m + "/" + y;
  document.getElementById("MyClockDate").innerText = date;

}
ShowDate();



function printValue(){
    const element = document.querySelector("#year");
    const element1 = element.value;
    document.querySelector("#printValue").append(element1)

}