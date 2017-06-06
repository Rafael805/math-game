var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var checkAnswer = document.querySelector('input[type=text]');
var btn = document.querySelector('input[type=button][value=check]');
var num1Display = document.getElementById("num1");
var num2Display= document.getElementById("num2");
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

        document.querySelector('input[type=text]').value = "";
        document.getElementById('num1').innerHTML = "";
        document.getElementById('num2').innerHTML = "";
        num1 = Math.floor((Math.random() * 10) + 1);
        num2 = Math.floor((Math.random() * 10) + 1);
        document.getElementById('num1').innerHTML = num1;
        document.getElementById('num2').innerHTML = num2;
        answer = num1 + num2;
};
