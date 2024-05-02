function ChangefDirection(){
    const heade = document.getElementsByClassName("container")
    // heade[2].style.backgroundImage = "red";
    // heade[2].style.color = "green";
    heade[0].style.flexDirection = "column";

}

function ChangeColor(){
    const color = document.getElementsByClassName("box");
    const color2 = document.getElementsByTagName("button");
    color[0].style.backgroundColor = "pink";
    color[1].style.backgroundColor = "pink";
    color[2].style.backgroundColor = "pink";
    color2[0].style.backgroundColor = "yellow";

}

