//create a question function
const question = [
    {
        question: "What is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the fastest land animal in the world?",
        answers: [
            {text: "chetah", correct: true},
            {text: "grey hound", correct: false},
            {text: "rabbit", correct: false},
            {text: "road runner", correct: false},
       ]
    },
    {
        question: "What is the smallest bird?",
        answers: [
            {text: "vulture", correct: false},
            {text: "humming bird", correct: true},
            {text: "swallow", correct: false},
            {text: "ostridge", correct: false},
       ]
    },
    {
        question: "What is the fast animal in the water?",
        answers: [
            {text: "Shark", correct: false},
            {text: "killer whale", correct: false},
            {text: "dolphin", correct: false},
            {text: "sailfish", correct: true},
       ]
    },
    {
        question: "What is the worlds known longest living animal?",
        answers: [
        {text: "snake", correct: false},
        {text: "tortose", correct: true},
        {text: "Elephant", correct: false},
        {text: "cat", correct: false},
   ]
    },
    {
        question: "What animal has the strongest bite force?",
        answers: [
            {text: "crocodile", correct: true},
            {text: "gorrilla", correct: false},
            {text: "shark", correct: false},
            {text: "polar bear", correct: false},
       ]
    },
    {
        question: "What is the largest cat in the world?",
        answers: [
            {text: "maine coon", correct: false},
            {text: "lepord", correct: false},
            {text: "tiger", correct: true},
            {text: "lion", correct: false},
       ]
    },
    {
        question: "What is the venimous snake in the world?",
        answers: [
            {text: "cobra", correct: false},
            {text: "rattle snake", correct: false},
            {text: "black momba", correct: false},
            {text: "inland taipa", correct: true},
       ]
    },
    {
        question: "What is the fastest fling animal?",
        answers: [
            {text: "pereqrine falcon", correct: true},
            {text: "eagle", correct: false},
            {text: "pigeon", correct: false},
            {text: "goose", correct: false},
       ]
    },
    {
        question: "What is the slowest land animal?",
        answers: [
            {text: "tutle", correct: false},
            {text: "rabbit", correct: false},
            {text: "donkey", correct: false},
            {text: "Three-toed sloth", correct: true},
       ]   
    }

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetState()
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '.' + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

     }else{
        selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
     });
     nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();



