var theQuestion = document.getElementById('questions');

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

// function currentQuestion() {
    
    
//     random = math.random(10);
//     for (let i = 0; i < allQuestions.length; i++) {
//         if (i===random) {
//             var newQuestion = allQuestions.id.i;

//         }
//         else {
//             return allQuestions;
//         }

//     }
    
//     newQuestion.appendChild(theQuestion);
    
    // theQuestion.appendChild(allQuestions);

