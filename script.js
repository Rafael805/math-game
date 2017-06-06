var numberDisplay = document.getElementById("numberDisplay");
var messageDisplay = document.querySelector("#message");
var num1 = document.getElementById("num1").innerHTML=Math.floor((Math.random() * 10) + 1);
var num2 = document.getElementById("num2").innerHTML=Math.floor((Math.random() * 10) + 1);
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var checkAnswer = document.querySelector('input[type=text]');
var btn = document.querySelector('input[type=button][value=check]');
var answer = num1 + num2;


btn.onclick = function() {
        if (checkAnswer.value == answer) {
                messageDisplay.textContent = "You are correct";
                messageDisplay.style.color = "green";
        } else {
                messageDisplay.textContent = "You are incorrect";
                messageDisplay.style.color = "red";
        }
};



// resetButton.addEventListener("click",  function() {
//         resetButton.textContent = "New Numbers";
//         messageDisplay.textContent = "";
//         num1 = document.getElementById("num1").innerHTML= Math.floor((Math.random() * 10) + 1);
//         num2 = document.getElementById("num2").innerHTML= Math.floor((Math.random() * 10) + 1);
// });
