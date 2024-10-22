const questions = [
    {
        Question : "What is my name?",
        answers:[
            {text:"kattu", correct: false},
            {text:"kattu", correct: false},
            {text:"Satvik", correct: true},
            {text:"kattu", correct: false}
        ]
    },

    {
        Question : "What is my petname?",
        answers:[
            {text:"kattu", correct: false},
            {text:"kattu", correct: false},
            {text:"Chikki", correct: true},
            {text:"kattu", correct: false}
        ]
    },

    {
        Question : "What is my age?",
        answers:[
            {text:"22", correct: false},
            {text:"23", correct: true},
            {text:"22", correct: false},
            {text:"22", correct: false}
        ]
    },

    {
        Question : "What is my fav food?",
        answers:[
            {text:"Pav Bhaji", correct: true},
            {text:"kattu", correct: false},
            {text:"Satvik", correct: false},
            {text:"kattu", correct: false}
        ]
    }
];

const questionElement = document.getElementById('question');
const anserButton = document.getElementById('ans-buttons');
const nextButton = document.getElementById('next-btn');

let currectQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currectQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
 
function showQuestion(){
    resetState();
    let currentQuestion = questions[currectQuestionIndex];
    let questionNo = currectQuestionIndex + 1;
    questionElement.innerHTML = questionNo +". " + currentQuestion.Question;
    
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add('btn');
        anserButton.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState(){
    nextButton.style.display= "none";
    while(anserButton.firstChild){
        anserButton.removeChild(anserButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(anserButton.children).forEach(button=>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
        
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`Your Score ${score} out of ${questions.length}!`;
    nextButton.innerHTML='Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currectQuestionIndex++;
    if(currectQuestionIndex< questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click', ()=>{
    if(currectQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();