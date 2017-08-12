var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var checkAnswer = document.querySelector('input[type=text]'); document.querySelector('input[type=button][value=check]');
var num1Display = document.getElementById("num1");
var num2Display= document.getElementById("num2");
var num1= Math.floor((Math.random() * 10) + 1);
var num2 =Math.floor((Math.random() * 10) + 1);
var header = document.querySelector("#h1");
var modeButtons = document.querySelectorAll(".mode");
var pointsDisplay = document.getElementById("points");
var highScoreDisplay = document.getElementById("top");
var points = 0;
var highScore = 0;
var mode = true;
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

        // when check button is clicked
        $(".ui.primary.button").on("click", function() {
                // if the value from input is equal to the actual answer execute
                if (checkAnswer.value == answer) {
                        messageDisplay.textContent = "You are correct"; // change text
                        messageDisplay.style.color = "green"; // change text color
                        h1.style.backgroundColor = "green";
                        points++; // add one to points variable
                        // run if the points are greater than the previous highscore points
                        if(points > highScore) {
                                highScore = points;
                        };
                        highScoreDisplay.textContent = highScore;
                        pointsDisplay.textContent = points;
                        if(mode === true) {
                                resetNums();
                        } else {
                                resetHard();
                        }
                } else {
                        messageDisplay.textContent = "Try again";
                        messageDisplay.style.color = "red";
                        h1.style.backgroundColor = "red";
                }
        });


        $(".mode").on("click", function() {
                reset();
                resetHard();
                resetTimer();
                mode = false;
        });

        $("#easy").on("click", function() {
                reset();
                resetNums();
                resetTimer();
                mode = true;
        });

        function resetHard() {
                num1 = Math.floor((Math.random() * 100) + 1);
                num2 = Math.floor((Math.random() * 100) + 1);
                num1Display.textContent = num1;
                num2Display.textContent = num2;
                answer = num1 + num2;
        }

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

        var count = 40;
        var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

        function timer() {
                count--;
                if (count < 0) {
                        clearInterval(counter);
                        return;
                }
                else if(count === 0) {
                        confirm("Press OK to play again");
                        points = 0;
                        pointsDisplay.textContent = 0;
                        count = 40;
                        resetNums();
                        reset();
                }
                 document.getElementById("timer").textContent = count + " secs";
        }

        function resetTimer() {
                count = 40;
                points = 0;
                highScore = 0;
                pointsDisplay.textContent = 0;
                highScoreDisplay.textContent = 0;
        }

        // RESET BUTTON
        resetButton.addEventListener("click", function() {
        reset();
        resetNums();
        resetTimer();
        });

});
