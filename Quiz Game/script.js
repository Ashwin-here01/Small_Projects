let outerBox = document.querySelector("#outer_box");
let heading = document.querySelector("#heading");
let para = document.querySelector("#para");
let startButton = document.querySelector("#start_button");

let count = 0;
let scoreCounter = 0;
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

startButton.addEventListener("click", () => {
    qHeading.innerText = questions[count];
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
    for(let i = 0; i < 4; i++) {
        outerBox.append(optionDivs[i]);
    }
});

for(let i = 0; i < 4; i++) {
    optionDivs[i].addEventListener("click", () => {
        if(optionDivs[i].innerText === answers[count - 1]){
            scoreCounter++;
            optionDivs[i].style.backgroundColor = "#BDF7B7"
            count++;
            
        } else {
            optionDivs[i].style.backgroundColor = "#F7B7B7"
        }
    });
}