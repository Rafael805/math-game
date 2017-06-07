var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var checkAnswer = document.querySelector('input[type=text]');
var btn = document.querySelector('input[type=button][value=check]');
var num1Display = document.getElementById("num1");
var num2Display= document.getElementById("num2");
var num1= Math.floor((Math.random() * 10) + 1);
var num2 =Math.floor((Math.random() * 10) + 1);
var header = document.querySelector("#h1");
var pointsDisplay = document.getElementById("points");
var topScoreDisplay = document.getElementById("top");
var points = 0;
var topScore = 0;
var answer = num1 + num2;
num1Display.textContent = num1;
num2Display.textContent = num2;

$(function() {

        $("input").keydown(function(event) {
                if(event.keyCode == 13) {
                        $(".ui.primary.button").trigger("click");
                }
        });

        $(".ui.primary.button").on("click", function() {
                if (checkAnswer.value == answer) {
                        messageDisplay.textContent = "You are correct";
                        messageDisplay.style.color = "green";
                        h1.style.backgroundColor = "green";
                        points++;
                        topScore = points;
                        topScoreDisplay.textContent = topScore;
                        pointsDisplay.textContent = points;
                        reset();
                } else {
                        messageDisplay.textContent = "Try again";
                        messageDisplay.style.color = "red";
                        h1.style.backgroundColor = "red";
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

        var count = 300;
        var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

        function timer() {
                count--;
                if (count < 0) {
                        clearInterval(counter);
                        return;
                }
                else if(count === 0) {
                        alert("Game Over");
                        points = 0;
                        pointsDisplay.textContent = 0;
                        count=30;
                }
                 document.getElementById("timer").textContent = count + " secs";
        }

});
