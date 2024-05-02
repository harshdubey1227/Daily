// window.addEventListener('load', function () {
//     console.log("page has been loaded");
//     let buttonele = document.getElementById("buttonpress");
//     let para = document.getElementById("para");
//     console.log(para);
//     console.log(buttonele);

//     let count = 0;
//     buttonele.addEventListener('click', function(){
//         count++;
//         para.innerText = "button has been clicked "+count + " times"
//     })
// })

window.addEventListener("load", function () {
  let timer = this.document.getElementById("timer");
  let start = this.document.getElementById("start");
  let stop = this.document.getElementById("stop");
  let reset = this.document.getElementById("reset");

  let intervalid = null;
  let count = 0;
  start.addEventListener("click", function () {
    intervalid = setInterval(() => {
      count++;
      timer.innerText = count;
    }, 1000);
  });

  stop.addEventListener("click", function () {
    clearInterval(intervalid);
  });

  reset.addEventListener('click', ()=>{
    clearInterval(intervalid);
    count = 0;
    timer.innerText = count;
    
  })
});
