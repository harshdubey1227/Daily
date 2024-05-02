window.addEventListener("load", () => {
  let addButton = this.document.getElementById("inputbutton");
  let inputField = this.document.getElementById("inputfield");
  let task = "";
  let taskcontainer = this.document.getElementById("taskdisplayer");

  inputField.addEventListener("input", function (event) {
    task = event.target.value;
  });

  addButton.addEventListener("click", function () {
    let para = document.createElement("p");
    para.innerText = task;
    taskcontainer.appendChild(para);
  });
});
