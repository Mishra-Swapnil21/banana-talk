/** to show the script is working 
 console.log("script is working from different file")**/
/**
 
// using prompt for input
var username = prompt("Give me username")

//using promt for processing
var welcomeMessage = "this script works!! " + username;

//output
alert(welcomeMessage);

**/

// button

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput)

// show it in console 
//console.log(btnTranslate)

//event listener
/**btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked")
})**/

function clickHandler() {
    console.log("clicked!");
    console.log("Input:-", txtInput.value);
};

btnTranslate.addEventListener("click", clickHandler)

