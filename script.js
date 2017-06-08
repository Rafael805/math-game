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
var highScoreDisplay = document.getElementById("top");
var points = 0;
var highScore = 0;
var answer = num1 + num2;
num1Display.textContent = num1;
num2Display.textContent = num2;

$(function() {

        // allows user to press enter on keyoard to submit answer
        $("input").keydown(function(event) {
                if(event.keyCode == 13) {
                        $(".ui.primary.button").trigger("click");
                }
        });

        $(".ui.primary.button").on("click", function() {
                // if the value from input is equal to the actual answer execute
                if (checkAnswer.value == answer) {
                        messageDisplay.textContent = "You are correct"; // change text
                        messageDisplay.style.color = "green"; // change text color
                        h1.style.backgroundColor = "green";
                        points++; // add one to points variable
                        if(points > highScore) {
                                highScore = points;
                        };
                        highScoreDisplay.textContent = highScore;
                        pointsDisplay.textContent = points;
                        resetNums(); // new numbers after every correct answer
                } else {
                        messageDisplay.textContent = "Try again";
                        messageDisplay.style.color = "red";
                        h1.style.backgroundColor = "red";
                }
                // highScore = Math.max(highScore); // returns the largest of zero or more numbers
        });

        // clears the messageDisplay and changes the header background color to original
        function reset() {
                        messageDisplay.textContent = "";
                        h1.style.backgroundColor = "steelblue"
        };

        // resets numbers
        function resetNums() {
                checkAnswer.value = "";
                num1Display.textContent = "";
                num2Display.textContent = "";
                num1 = Math.floor((Math.random() * 10) + 1);
                num2 = Math.floor((Math.random() * 10) + 1);
                num1Display.textContent = num1;
                num2Display.textContent = num2;
                answer = num1 + num2;
        }

        var count = 20;
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
                        count=20;
                        resetNums();
                        reset();
                }
                 document.getElementById("timer").textContent = count + " secs";
        }

});
