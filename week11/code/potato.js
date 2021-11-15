console.log("javascript!!")

const theButton = document.getElementById("firstButton");
let theBody = document.querySelector("body");
let thePara = document.querySelector("p");
let theHeadline = document.querySelector("h1");


theButton.addEventListener('click', myFunction)

function myFunction(){
    console.log("button clicked!!");
    theBody.style.backgroundColor = "pink";
    theBody.style.color = "white";
    thePara.textContent = "you pressed the button!!"
    
}

