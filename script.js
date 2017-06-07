var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var checkAnswer = document.querySelector('input[type=text]');
var btn = document.querySelector('input[type=button][value=check]');
var num1Display = document.getElementById("num1");
var num2Display= document.getElementById("num2");
var num1= Math.floor((Math.random() * 10) + 1);
var num2 =Math.floor((Math.random() * 10) + 1);
var header = document.querySelector("#h1");
var answer = num1 + num2;
var points = 0;
num1Display.textContent = num1;
num2Display.textContent = num2;

$(function() {
        $(".ui.primary.button").on("click", function() {
                if (checkAnswer.value == answer) {
                        messageDisplay.textContent = "You are correct";
                        messageDisplay.style.color = "green";
                        points++;
                        console.log(points);
                        reset();
                } else {
                        messageDisplay.textContent = "Try again";
                        messageDisplay.style.color = "red";
                }
        });

        function reset() {
                        document.querySelector('input[type=text]').value = "";
                        document.getElementById('num1').textContent = "";
                        document.getElementById('num2').textContent = "";
                        num1 = Math.floor((Math.random() * 10) + 1);
                        num2 = Math.floor((Math.random() * 10) + 1);
                        document.getElementById('num1').textContent = num1;
                        document.getElementById('num2').textContent = num2;
                        answer = num1 + num2;
        };

        var count = 30;
        var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

        function timer() {
                  count--;
                  if (count <= 0) {
                     clearInterval(counter);
                     return;
                  }
                 document.getElementById("timer").textContent = count + " secs";
        }

});
