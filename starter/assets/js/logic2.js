// query selectors

const startButton = document.querySelector("#start-button");
const startScreen = document.querySelector("#start-screen");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const questionsContainer = document.querySelector("#questions");
const timerElement = document.querySelector("#timer-count") ;
const  endScreen = document.querySelector("#end-screen");
const feedback = document.querySelector('#feedback');
const finalScore = document.querySelector("#final-score");
const submitBtn = document.querySelector("#submit")
const input = document.querySelector("input");
let initials = document.querySelector("#initials")
// stored variables

let questionNumber = 0;
let timerCount = 100;
let initialsArray = [];
let scoresArray = [];

//Timer Function

function startTimer() {
    //set timer using function
    let timer = setInterval(function() {
    //goes down 1 second at a time
        timerCount --;
    // display time to html 
    timerElement.innerText = timerCount;

    // if statement to display an end screen state when timer finishes

    if (timerCount <= 0  || currentQIndex === questions.length) {
        clearInterval(timer)

        questionsContainer.classList.add("hide")
        endScreen.classList.remove("hide")

    }

}, 1000);
}

/* function to render questions and answers */
var currentQIndex = 0;
function renderQuestions(){
var currentQ = questions[currentQIndex]

var titleElement = document.getElementById('question-title')
titleElement.textContent = currentQ.question

choices.innerHTML = '';

for (let index = 0; index < currentQ.Answers.length; index++) {
    const answer = currentQ.Answers[index];
    console.log(answer)
    let choiceBtn = document.createElement('button')
    choiceBtn.setAttribute('value', answer)
    choiceBtn.textContent = index + 1 + ': ' + answer

    choices.appendChild(choiceBtn)
}
}

function handleAnswerClick(event) {
    let buttonElement = event.target;

    if (buttonElement.value !== questions[currentQIndex].correctAnswer) {
        timerCount -= 15

        if (timerCount < 0) {
            timerCount = 0
        }

        timerElement.textContent = timerCount

        feedback.textContent = "wrong answer"
    } else {
        feedback.textContent = "correct answer"
    }

    currentQIndex++

    if (timerCount <=0 || currentQIndex === questions.length) {
        stopQuiz()
        console.log('stopped')
    } else {
        renderQuestions()
    }
}
function stopQuiz() {
    questionsContainer.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScore.textContent = timerCount;

}

submitBtn.addEventListener("click", function(){

if (input.value === "" ) {alert ("You gotta enter your initials if you want to make the score board hombre!")
}else{
    let previousScores = localStorage.getItem("initials")

    if (previousScores !=null){

        initialsArray = JSON.parse(localStorage.getItem("initials"))
        scoresArray = JSON.parse(localStorage.getItem("Score"))
    }

    initialsArray.push(initials.value);
    scoresArray.push(timerCount + 1);
    
    localStorage.setItem("initials", JSON.stringify(initialsArray))
    localStorage.setItem("Score", JSON.stringify(scoresArray))
}

input.value = "";
finalScore = 0;

})



//hide hide start screen

function startQuiz() {
    startScreen.classList.add("hide");
    questionsContainer.removeAttribute("class")
// // shows question title
//     questionsContainer.className = "";
//     questionTitle.textContent= questions[0].Question;



// start the timer

startTimer() 

  // make the answers in to buttons and format like a button

//   choices.addEventListener ("click", function(){

// // display if answer is correct or incorrect

// // THEN if correct add 1 to socre and move to next question

// //THEN if wrong remove 10 seconds from the timer 

//   })
    
 renderQuestions()
}

//start button

startButton.addEventListener("click", startQuiz);
choices.addEventListener("click", handleAnswerClick)