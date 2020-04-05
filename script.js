console.log("This is a simple Quiz app in Vanilla JavaScript");



let question = document.getElementById("question");
let choices = Array.from(document.getElementsByClassName("choice-text"));
let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Who is the first education minister of India?",
        choice1: "Dr. Rajendra Parsad",
        choice2: "Dr. APJ Abdul Kalam",
        choice3: "Hazrat Maulana Abul Kalam Azad RAH",
        choice4: "Dr. Bhimrao Ambedkar",
        answer: 3,
    },
    {
        question: "Who is called as the father of nation?",
        choice1: "Mahatma Gandhi",
        choice2: "Dr. Zakir Hussain",
        choice3: "Sardar Vallabh Patel",
        choice4: "Maharana Partap Singh",
        answer: 1,
    },
    {
        question: "Holy Kaba is situated in:",
        choice1: "Istambul",
        choice2: "Bagdad",
        choice3: "Makkah",
        choice4: "Yarusalam",
        answer: 3,
    }

];

// constant
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () =>{
    questionCounter ++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice", + number];
    });
};

startGame();
