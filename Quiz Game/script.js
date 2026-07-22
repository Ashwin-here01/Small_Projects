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

startButton.addEventListener("click", () => {
    heading.remove();
    para.remove();
    startButton.remove();
});

function nextQuestion() {
    if(count === 6) return;
    
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
    count++;
    outerBox.append(qHeading);
    outerBox.append(innerBox);
    optionDivs.forEach((optionDiv) => {
        outerBox.append(optionDiv);
    });
}

startButton.addEventListener("click", nextQuestion);

for(let optionDiv of optionDivs) {
    optionDiv.addEventListener("click", () => {
        if(answered) return;

        if(optionDiv.innerText == answers[count - 1]) {
            scoreCounter++;
            score.innerText = `Score: ${scoreCounter}`;
            optionDiv.style.backgroundColor = "#BDF7B7";
            // count++;
        } else {
            optionDiv.style.backgroundColor = "#F7B7B7";

            optionDivs.forEach((div) => {
                if(div.innerText == answers[count - 1]) {
                    div.style.backgroundColor = "#BDF7B7";
                }
            });
        }

        answered = true;

        nextQuestion();
        // setTimeout(nextQuestion, 1000);
    });
}



// Add progress bar
// Write stopping condition
// In the end display the result