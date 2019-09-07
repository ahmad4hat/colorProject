var numSquare = 6;
var color = [];
var pickColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetB = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".modeButton");

init();
function init() {
   
    setUpMode();
    setUpSquareListen();
    

    reset();


}

function setUpMode()
{
    for (var i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function () {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");

            if (this.textContent === "Easy") {
                numSquare = 3;
            }
            else {
                numSquare = 6;
            }
            reset();

        })
    }
}

function setUpSquareListen()
{
    for (var i = 0; i < squares.length; i++) {


        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;

            if (pickColor === clickedColor) {
                messageDisplay.textContent = "Correct";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetB.textContent = "play Again";

            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try Again";
            }
        })
    }
}



function reset() {
    color = rngColor(numSquare);
    pickColor = randomColor();
    for (var i = 0; i < squares.length; i++) {
        for (var i = 0; i < squares.length; i++) {
            if (color[i]) {
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = color[i];
            }
            else {
                squares[i].style.display = "none";
            }
        }



    }

    colorDisplay.textContent = pickColor;
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetB.textContent = "new color";
}




resetB.addEventListener("click", function () {
    reset();

})





function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function randomColor() {
    var a = Math.floor(Math.random() * color.length);
    return color[a];
}

function rngColor(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {

        arr.push(rngColorMaker());
    }



    return arr;
}

function rngColorMaker() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";


}

