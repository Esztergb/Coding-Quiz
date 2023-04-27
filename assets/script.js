//Quiz Questions
var quizData = [
    //Q1
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<js",
        c: "<scripting>",
        d: "<javascript>",
        correct: "a",
    },
    //Q2
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "msgBox('Hello World')",
        b: "alertBox('Hello World')",
        c: "alert('Hello World')",
        d: "msg('Hello Worl')",
        correct: "c",
    },
    //Q3
    {
        question: "How does a FOR loop start?",
        a: "for (i <= 5; i++)",
        b: "for (i = 0; i<=5; i++)",
        c: "for i = 1 to 5",
        d: "for (i = 0; i <= 5",
        correct: "b",
    },
    //Q4
    {
        question: "What is the correct way to write a JavaScript array?",
        a: "var colors = 'red', 'green', 'blue'",
        b: "var colors = {'red', 'green', 'blue'}",
        c: "var colors = ['red', 'green', 'blue']",
        d: "none of the above",
        correct: "c",
    },
    //Q5
    {
        question: "JavaScript is a ___ -side programming language.?",
        a: "Client",
        b: "Server",
        c: "Both",
        d: "None",
        correct: "c",
    },
    //Q6
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        a: "min(x,y);",
        b: "Math.min(x,y)",
        c: "Math.min(xy)",
        d: "min(xy)",
        correct: "b",
    },
    //Q7
    {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        a: "if(x2)",
        b: "if(x = 2)",
        c: "if(x == 2)",
        d: "if(x != 2",
        correct: "c",
    },
    //Q8
    {
        question: "What will the following code return: Boolean(3 < 7)?",
        a: "true",
        b: "false",
        c: "NaN",
        d: "SyntaxError",
        correct: "a",
    },
    //Q9
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        a: "if(i <> 5)",
        b: "if(i != 5)",
        c: "if i =! 5 then",
        d: "if i <> 5",
        correct: "b",
    },
    //Q10
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "onchange",
        b: "onmouseclick",
        c: "onmouseover",
        d: "onclick",
        correct: "d",
    },
];

//Variables ("grabbing the html classes and ID's")
var quiz= document.getElementById('quiz');
var answerEls = document.querySelectorAll('.answer');
var questionEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');
var submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;




//calling the load quiz function
loadQuiz()

//count down timer:
var timeLeft = 60;
var elem = document.getElementById('Timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}

function loadQuiz() {
    //calling deselect function to clear quiz box and than replace current data with new data (currentQuiz which is an array)
    deselectAnswers()
    var currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    var answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    var answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
           //creates innerHTML to display scores and "on-click' takes me to the start up html "
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="window.location.href='start.html'">Start Over</button> 
           `
       }
    }
})
