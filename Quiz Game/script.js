let outerBox = document.querySelector("#outer_box");
let heading = document.querySelector("#heading");
let para = document.querySelector("#para");
let startButton = document.querySelector("#start_button");

let count = 0;
let scoreCounter = 0;
let answered = false;
let questions = [
    "What is H₂O commonly known as?",
    "How many continents are there on Earth?",
    "Which gas do plants absorb from the air?",
    "Which shape has three sides?",
    "What is the freezing point of water?",
    "Which instrument is used to see stars and planets?"
];
let options = [
    ["Salt", "Water", "Oxygen", "Hydrogen"],
    [5, 6, 7, 8],
    ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    ["Square", "Circle", "Triangle", "Rectangle"],
    ["0°C", "100°C", "50°C", "32°C"],
    ["Microscope", "Telescope", "Stethoscope", "Periscope"]
];
let answers = ["Water", 7, "Carbon Dioxide", "Triangle", "0°C", "Telescope"];
let qHeading = document.createElement("h2");
let innerBox = document.createElement("div");
let questionNumber = document.createElement("p");
let score = document.createElement("p");
let optionDivs = [document.createElement("div"), document.createElement("div"), document.createElement("div"), document.createElement("div")];

let quizResultHeading = document.createElement("h1");
let scoreBoard = document.createElement("div");
let scoreBoardParas = [document.createElement("p"), document.createElement("p")];
let restartBtn = document.createElement("button");

let progressBar = [document.createElement("div"), document.createElement("div")];

startButton.addEventListener("click", () => {
    heading.remove();
    para.remove();
    startButton.remove();
});

progressBar[0].setAttribute("id", "progress_bar_outer");
progressBar[1].setAttribute("id", "progress_bar_inner");
progressBar[0].append(progressBar[1]);

function nextQuestion() {
    if(count === 6){
        setTimeout(dispResult, 1000);
        return;
    }
    
    answered = false;
    qHeading.innerText = questions[count];
    optionDivs.forEach((optionDiv) => {
        optionDiv.style.backgroundColor = "";
    });
    innerBox.setAttribute("id", "inner_box");
    innerBox.append(questionNumber);
    innerBox.append(score);
    questionNumber.innerText = `Question ${count + 1} of ${questions.length}`;
    score.innerText = `Score: ${scoreCounter}`;
    for(let i = 0; i < 4; i++ ) {
        optionDivs[i].setAttribute("class", "option_box");
        optionDivs[i].innerText = options[count][i];
    }
    outerBox.append(qHeading);
    outerBox.append(innerBox);
    optionDivs.forEach((optionDiv) => {
        outerBox.append(optionDiv);
    });
    
    outerBox.append(progressBar[0]);
    
    count++;
}

startButton.addEventListener("click", nextQuestion);

for(let optionDiv of optionDivs) {
    optionDiv.addEventListener("click", () => {
        if(answered) return;
        
        if(optionDiv.innerText == answers[count - 1]) {
            scoreCounter++;
            score.innerText = `Score: ${scoreCounter}`;
            optionDiv.style.backgroundColor = "#BDF7B7";
        } else {
            optionDiv.style.backgroundColor = "#F7B7B7";
            
            optionDivs.forEach((div) => {
                if(div.innerText == answers[count - 1]) {
                    div.style.backgroundColor = "#BDF7B7";
                }
            });
        }
        
        answered = true;

        progressBar[1].style.width = `${(count / questions.length) * 100}%`;
        
        setTimeout(nextQuestion, 1000);
    });
}

function dispResult() {
    qHeading.remove();
    innerBox.remove();
    for(let optDiv of optionDivs) {
        optDiv.remove();
    }
    progressBar[1].style.width = "0%";
    progressBar[0].remove();

    quizResultHeading.innerText = "Quiz Results";

    scoreBoardParas[0].innerText = `You scored ${scoreCounter} out of ${questions.length}`;
    if(scoreCounter === questions.length) scoreBoardParas[1].innerText = "Excellent performance! Keep learning!";
    else if(scoreCounter < (questions.length / 2)) scoreBoardParas[1].innerText = "Need improvement! Keep learning!";
    else scoreBoardParas[1].innerText = "Good effort! Keep learning!";

    scoreBoard.append(scoreBoardParas[0]);
    scoreBoard.append(scoreBoardParas[1]);

    restartBtn.innerText = "Restart Quiz";


    quizResultHeading.style.fontSize = "2.6rem";

    scoreBoardParas[0].style.fontSize = "1.4rem";
    scoreBoardParas[1].style.fontSize = "1.7rem";
    scoreBoardParas[1].style.fontWeight = "bold";

    scoreBoard.setAttribute("id", "score_board");

    restartBtn.setAttribute("id", "start_button");


    outerBox.append(quizResultHeading);
    outerBox.append(scoreBoard);
    outerBox.append(restartBtn);

    count = 0;
    scoreCounter = 0;
}

restartBtn.addEventListener("click", () => {
    quizResultHeading.remove();
    scoreBoard.remove();
    restartBtn.remove();
    nextQuestion();
});