var numberDisplay = document.getElementById("numberDisplay");
var messageDisplay = document.querySelector("#message");
var num1Display = document.getElementById("num1");
var num2Display= document.getElementById("num2");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var checkAnswer = document.querySelector('input[type=text]');
var btn = document.querySelector('input[type=button][value=check]');
var num1= Math.floor((Math.random() * 10) + 1);
var num2 =Math.floor((Math.random() * 10) + 1);
var answer = num1 + num2;
num1Display.textContent = num1;
num2Display.textContent = num2;

btn.onclick = function() {
        if (checkAnswer.value == answer) {
                messageDisplay.textContent = "You are correct";
                messageDisplay.style.color = "green";
        } else {
                messageDisplay.textContent = "You are incorrect";
                messageDisplay.style.color = "red";
        }
};

resetButton.addEventListener("click",  function() {
        resetButton.textContent = "New Numbers";
        messageDisplay.textContent = "";
        num1 = num1Display.textContent = Math.floor((Math.random() * 10) + 1);
        num2 = num1Display.textContent = Math.floor((Math.random() * 10) + 1);
});
