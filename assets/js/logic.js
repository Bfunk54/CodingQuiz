// variables to keep track of quiz state
    // currentQuestion
    // time
    // timerId

var timerId = document.getElementById('timer1');
var newTimer = document.querySelector('.timerSpan');
// variables to reference DOM elements
var questionsEl = document.getElementById('question-container');
var startBtn = document.getElementById('startButton');
var theQuestions = document.getElementById('allQuestions');
var answerChoicesEl = document.getElementById('choices');
var shuffledQuestions, currentQuestionId;

/// FUNCTION TO START THE QUIZ
startBtn.addEventListener("click", function() {
  console.log("Started");
  // hide start screen 
  document.body.innerHTML = "";
  // un-hide questions section
  questionsEl.classList.remove('hide');
  shuffledQuestions = allQuestions.sort(() => Math.random() - .5);
console.log(shuffledQuestions);
  currentQuestionId = 0;
  setNextQuestion();


  // start timer
  var secondsLeft = 75;

  function setTime() {
  // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerSpan.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image

    }

  }, 1000);
}
})

  // show starting time

  function showStartTime() {
    newTimer.textContent = " ";

  }
  


/// FUNCTION TO GET/SHOW EACH QUESTION ///
function setNextQuestion() {
  showQuestions(shuffledQuestions[currentQuestionId]);
}

  // get current question object from array

  // update title with current question

  // clear out any old question choices

  // loop over choices
    // FOR {
      // create new button for each choice
  
      // display on the page
      
    // } 
/// FUNCTION FOR CLICKING A QUESTION ///
function questionClick(event) {

  // if the clicked element is not a choice button, do nothing.
  if (something) {

  }

  if (something) {
  // check if user guessed wrong
    // penalize time

    // display new time on page

    // give them feedback, letting them know it's wrong
  } else {
    // give them feedback, letting them know it's right
  }

  // flash right/wrong feedback on page for a short period of time

  // move to next question

  // check if we've run out of questions
    // if so, end the quiz
    // else, get the next question

function showQuestions(title) {
    questionsEl.innerText = allQuestions.theQuestions;
    // questions.choices.array.forEach(answer => {
    //   const button = document.createElement('button');
    //   button.innerText = answer.text;
    //   button.classList.add('btn');
    //   if (answer.correct) {
    //     button.dataset.correct = answer.correct;
    //   }
    //   button.addEventListener('click', selectAnswer)
    //   answerButtonsElement.appendChild(button);
    // });

  }
}

/// FUNCTION TO END THE QUIZ ///
function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
}

/// FUNCTION FOR UPDATING THE TIME ///
function clockTick() {
  // update time

  // check if user ran out of time
}

function saveHighscore() {
  // get value of input box - for initials

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

/// CLICK EVENTS ///
  // user clicks button to submit initials

  // user clicks button to start quiz

  // user clicks on element containing choices

