const questions = [
    {
        question: "Which is our national animal?",
        answers: [
            { text: "Tiger", correct: true },
            { text: "Lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Rome", correct: false },
            { text: "Berlin", correct: false },
        ]
    },
    
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "What is the square root of 144?",
        answers: [
            { text: "14", correct: false},
            { text: "12", correct: true },
            { text: "10", correct: false },
            { text: "16", correct: false },
        ]
    },
    {
        question: "How many months have 28 days?",
        answers: [
            { text: "1", correct: false },
            { text: "6", correct: false },
            { text: "12", correct: true },
            { text: "all months have 28", correct: false },
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Michelangelo", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
        ]
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answers: [
            { text: "50°C", correct: false },
            { text: "100°C", correct: true },
            { text: "75°C", correct: false },
            { text: "101°C", correct: false },
        ]
    },
    {
        question: "What is the next letter in the series: A, E, I, M, Q, __?",
        answers: [
            { text: "S", correct: false },
            { text: "U", correct: true },
            { text: "W", correct: false },
            { text: "Y", correct: false },
        ]
    },
    {
        question: "If you rearrange the letters (IGNATAENR) you would get the name of a/an:",
        answers: [
            { text: "Animal", correct:false },
            { text: "Country", correct: true },
            { text: "Ocean", correct: false },
            { text: "Vegetable", correct: false },
        ]
    },
    {
        question: "Which word in the dictionary is spelled incorrectly?",
        answers: [
            { text: "Supercalifragilisticexpialidocious", correct: false },
            { text: "Incorrectly", correct: true },
            { text: "Misspelled", correct: false },
            { text: "Dictionary", correct: false },
        ]
    },
   
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();