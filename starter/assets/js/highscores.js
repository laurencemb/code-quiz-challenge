/* Queary selectors for highscores page */

let highScores = document.querySelector("#highscores")
const clearBtn = document.querySelector("#clear")

/* Arrays to store score values and initials */

let initialsArray
let scoresArray

/* function to display scores

loops through the initials array

- minus one to stop it showing full array at end

create list element for each item

setting the text for each list item to the value of the array initials and the score at the same index values*/

function displayScores(){

    for (let i =0; i <initialsArray.length -1; i++ ){

        let li = document.createElement ("li")

        li.innerHTML = (initialsArray[i] + ": " + scoresArray[i])
        highScores.appendChild(li);
    }

}

/* function to retireve the score from local storage

parse receives it as an object

then pushing the score to the scores array*/



function getScore() {

    let storedScore = (localStorage.getItem("Score"));
    scoresArray = JSON.parse(storedScore);

    scoresArray.push(storedScore);

}

/* function to retireve the initials from local storage

parse receives it as an object

then pushing the score to the initalsarray

set an error text for if there are no scores*/

function getInitials() {
    let storedInitials = (localStorage.getItem("initials"));
    initialsArray = JSON.parse(storedInitials);

    

    if (storedInitials === null){
        highScores.innerText = "You haven't set a score yet!"
    } else {
        initialsArray.push(storedInitials);}

        getScore()
        displayScores()

}

getInitials()

/* clear button loops through highscores and as long as there are child elements it removes them thenit removes data fromt he localstorafge.  */
clearBtn.addEventListener("click", function(){
    while (highScores.hasChildNodes()){
        highScores.removeChild(highScores.firstChild)
    }

    window.localStorage.clear();
})