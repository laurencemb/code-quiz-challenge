// /* Query Selectors */

// var scores = document.querySelector(".scores");
// var timer = document.querySelector(".timer");
// var timerElement = document.querySelector("#timer-count") ;
// var start = document.querySelector(".start");
// var startScreen = document.querySelector("#start-screen");
// var startButton = document.querySelector("#start-button");
// var questionsContainer = document.querySelector("#questions");
// var questionTitle = document.querySelector("#question-title");
// var choices = document.querySelector("#choices");
// var correct = document.querySelector("#correct");
// var incorrect = document.querySelector("#incorrect");
// var endScreen = document.querySelector("#end-screen");
// /* var endScreenLose = document.querySelector("#end-screen-lose");  */
// var hide = document.querySelector(".hide");
// var finalScore = document.querySelector("#final-score");
// var initials = document.querySelector("#initials");
// var submit = document.querySelector("#submit");
// var feedback = document.querySelector("#feedback");
// var clear = document.querySelector("#clear");

// /* Variables */
// var timer;
// var timerCount = 100;
// var chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
// var score = 0; 
// var allScores = [];
// var highScore = "";
// var timeOut = "true";
// var isWin = "true";
// var chosenAnswer;
// // questions var storing questions and answers in different file

// /* init function - loads initial screen state */

// /* init(){
//     getLastScore();
//     getHighScore(); */
//     //timer and count to load the correct time to the screen
//     //button? not sure i need to include this
//     //highscore link?  not sure i need to include this in this function
//     // current highscore -  ithink it would be a nice touch to show this but not required


// startButton.addEventListener("click", function() {
//     startQuiz()
//     });

// /* This function starts the quiz and is activated on the press of the start button  */
// function startQuiz(){
//     timerCount = 60;
//     // stop quiz being restared with:
//     startScreen.classList.add("hide"); //hide start screen on click
//     questionsContainer.classList.remove("hide") //shows the questions div 
//     renderQuestions();
//     startTimer();
// }


// //Set time funtion to start and stop the timer and trigger win or lose
// //set timer
// function startTimer(){
//     timer = setInterval(function() {
//         timerCount --;
//          timerElement.textContent = timerCount;
//             if (timerCount >=0) {
//                 timeOut();
//             }
//             else { if (isWin && timerCount >0) { 
//                 clearInterval();     // stops the timer
//                 completedQuiz();
//             }
// }
//     if (timerCount === 0 ){
//         clearInterval();
//         timeOut();
//     }
// }, 1000);
// }

// function renderQuestions(){
//     let question = questions[chosenQuestion];
//    questionTitle.innerHTML = question.title
//    choices.innerHTML = question.Answers.map(
//     (choice) =>
//     <button value = "#{choice}"> #{choice} </button>  ).join("");
//     choices.addEventListener("click", selectedOptions)
// }

// function selectedOptions(){
//     button = Event.target;
//     chosenAnswer = event.target.value;
//     let answer = questions[chosenQuestion].correctAnswer;
//     if (selected === answer) {
//         button.setattribute("style", "background-color: blue");
//         score++;
//         correctNoise.play();
//     } else {
//         button.setattribute("style", "background-color: grey");
//         time -10;
//         incorrectNoise.play();
//     }
//     choices.removeEventListener("click", selectedOptions)
//     }

// // validating answers

// function nextQuestion (){
//    setTimeout( () {
//     renderQuestions();
//    }, 500);
//    //if render questions has been called 5 times then result()  don't know how to tally how many times render question has been called
//    }
    
//    // Quiz overscreen 
// function completedQuiz () {
//     questionsContainer.classList.add("hide");
//     endScreen.classList.remove("hide");
//     finalScore.innerHTML = score;
//     clearInterval(timedInterval);
//     timer.innerText = 100;
//     // need to show the id endscreen text
//     //display score
//     // save the score to the loacal storage  
//   /*   startButton.disabled = false;  *///can restart the quiz

// }
// /* function timeOut () {
//     questionsContainer.classList.add("hide");
//     endScreenLose.classList.remove("hide");
//     finalScore.innerHTML = score;
//     clearInterval(timedInterval);
//     timer.innerText = 100; */
//     //need to show timeout screen
//     //display socre
//     //scave the socre to the local storage
//    /*  startButton.disabled = false;  */
// }

// // Updates score count on screen and sets score count to client storage
// function setScores(){
//     score.textContent = score; 
//     localStorage.Storage.setItem("scores", score);
// }

// // Updates highscore on screen and sets highscore to client storage
// submit.addEventListener("click", (){
//     let newUser = {
//         scores: score,
//         initials: initials.value.toUpperCase();
//     }
//     localStorage.setItem("newUser", JSON.stringify(newUser));
//     endScreenLose.classList.add("hide");
//      endScreenWin.classList.add("hide");
//      startScreen.classList.remove("hide");

// });
// /* function setHighScore(){
//     highScore.textContent = highScore; 
//     localStorage.Storage.setItem("Highscore", highScore);
// } */

// // functions for init
// function getLastScore() {
//     //get the last stored value from the local storage if it exishts
//     var storedScores = local.storage.getItem("scores");
//         if (storedScore === null) {
//             score = "0";
//         } else { 
//             score = storedScores[0] //check what value will always give the last stored score and if it is an array 
//         }
//         //render win to page
//         score.textContent = score
// }


// getHighScore() {
//         //get the highest stored value from the local storage if it exishts
//         var storedHighScore = local.storage.getItem("highscore");
//             if (storedScore === null) {
//                 highscore = "0";
//             } else { 
//                 highscore = // need some kind of for loop for is greater than previous to get to the highest value in scores
//             highscore.textContent = highscore
//     }
// }



// // i just want to show the next question but i dont know how.

// //event listner for the start button



// // call init
// /* init(); */




















