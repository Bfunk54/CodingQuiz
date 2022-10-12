var timerId = document.getElementById('timer1');
var newTimer = document.getElementById('timerSpan');
// variables to reference DOM elements
var questionsEl = document.getElementById('question');
var questionsContainer = document.getElementById('question-container');
var startBtn = document.getElementById('startButton');
var nextButton = document.getElementById('next-btn');
var theQuestions = document.getElementById('allQuestions');
const answerChoicesEl = document.getElementById('choices');
var shuffledQuestions, currentQuestionId;

nextButton.addEventListener('click', () => {
    currentQuestionId++;
    questionCount++;
    setNextQuestion()
})
/// FUNCTION TO START THE QUIZ
startBtn.addEventListener("click", () => {
    startGame()
})
  function startGame() {
  console.log("Started");
  // hide start screen 
  document.getElementById('full-start-screen').innerHTML = "";
  // un-hide questions section
  questionsContainer.classList.remove('hide');
  shuffledQuestions = allQuestions.sort(() => Math.random() - .5);
console.log(shuffledQuestions);
  currentQuestionId = 0;
  setNextQuestion();
  setTime();
}

  // start timer
  var secondsLeft = 75;

  function setTime() {
  // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      console.log(secondsLeft);
      newTimer.textContent = secondsLeft + " seconds remaining";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      newTimer.textContent = " ";
      // Call function to end the game
      timeRanOut();

    }

  }, 1000);
}

var questionCount = 0;

function setNextQuestion() {
    if (shuffledQuestions.length > questionCount + 1) {
        resetState();
        showQuestions(shuffledQuestions[currentQuestionId]);
    }
    else {
        startGame();
    }
  }

  function showQuestions(title) {
    questionsEl.innerText = title.title;
    title.choices.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.isCorrect) {
            button.dataset.isCorrect = answer.isCorrect;
        }
        button.addEventListener('click', selectAnswer)
        answerChoicesEl.appendChild(button);
    })

  }

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while (answerChoicesEl.firstChild) {
        answerChoicesEl.removeChild(answerChoicesEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.isCorrect;
    setStatusClass(document.body, isCorrect);
    Array.from(answerChoicesEl.children).forEach(button => { setStatusClass(button, button.dataset.isCorrect)})
    if (shuffledQuestions.length > questionCount + 1) {
        nextButton.classList.remove('hide')
      } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
        console.log(startBtn)
        newTimer.textContent = " ";
      }

}

function timeRanOut() {
    if (secondsLeft.length > 1) {
       
      } else {
        alert("You ran out of time!")
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
        newTimer.textContent = " ";
      }

}

function setStatusClass(element, isCorrect) {
    clearStatusClass(element)
    if (isCorrect) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

  // show starting time

  function restartTimer() {
    newTimer.textContent = " ";

  }

  const allQuestions = [{
    id: 0,
    title: "Which language does the browser read first?",
    choices: [{ text: "JavaScript", isCorrect: false },
        { text: "CSS", isCorrect: false },
        { text: "HTML", isCorrect: true },
        { text: "English", isCorrect: false }
    ]

},
{
    id: 1,
    title: "What's the correct CSS code that helps make elements dynamic?",
    choices: [{ text: "display: flex;", isCorrect: true },
        { text: "display: flexbox;", isCorrect: false },
        { text: "display: flex();", isCorrect: false },
        { text: "display: block-inline flex;", isCorrect: false}
    ]

},
{
    id: 2,
    title: "How can you have elements move dynamically based on a certain screen size?",
    choices: [{ text: "Flexbox", isCorrect: true },
        { text: "Media Queries", isCorrect: false },
        { text: "Pseudo-elements", isCorrect: false},
        { text: "Git Pull Request", isCorrect: false }
    ]

},
{
    id: 3,
    title: "What's the correct CSS code that helps make elements dynamic?",
    choices: [{ text: "display: flex;", isCorrect: true },
        { text: "display: flexbox;", isCorrect: false },
        { text: "display: flex();", isCorrect: false },
        { text: "display: block-inline flex;", isCorrect: false}
    ]

},
{
    id: 4,
    title: "What's the best way to hold a bunch of related data in JavaScript?",
    choices: [{ text: "a variable", isCorrect: false },
        { text: "a flexbox", isCorrect: false },
        { text: "a function", isCorrect: false },
        { text: "an array", isCorrect: true}
    ]

},
{
    id: 5,
    title: "Object vs. Array(JavaScript): Which is better for handling data you are going to need to sort through?",
    choices: [{ text: "An object, because you can give it properties with data to easily access data points", isCorrect: false },
        { text: "An object, becuase you can manipulate them easily in functions", isCorrect: false },
        { text: "An Array, because you can put a bunch of object in one and easily sort through them using functions", isCorrect: true },
        { text: "An Array, becuase it use properties that can be easily called.", isCorrect: false}
    ]

},
{
    id: 6,
    title: "How can you minimize the amount of CSS you are doing by using JavaScript?",
    choices: [{ text: "You can use shorthand", isCorrect: false },
        { text: "Pseudocode", isCorrect: false },
        { text: "APIs", isCorrect: true },
        { text: "Don't do CSS at all, it's already good enough", isCorrect: false}
    ]

},
{
    id: 7,
    title: "What's the simplest library you can call to add a clock to your program?",
    choices: [{ text: "Timer.js", isCorrect: false },
        { text: "Minute.js", isCorrect: false },
        { text: "Present.js", isCorrect: false },
        { text: "Moment.js", isCorrect: true }
    ]

},
{
    id: 8,
    title: "Best place to save user input data to display on page?",
    choices: [{ text: "Limited Storage", isCorrect: false },
        { text: "Regional Store", isCorrect: false },
        { text: "Local Storage", isCorrect: true },
        { text: "Server Storage", isCorrect: false}
    ]

},
{
    id: 9,
    title: "How do you get code your partner wrote from Github onto your local computer?",
    choices: [{ text: "git push origin main", isCorrect: false },
        { text: "git pull origin main", isCorrect: true },
        { text: "git take origin main", isCorrect: false },
        { text: "git get origin main", isCorrect: false}
    ]


}];
