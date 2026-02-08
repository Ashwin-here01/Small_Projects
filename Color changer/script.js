let body = document.querySelector("body");
let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let random = document.querySelector("#random");

red.addEventListener("click", () => {
    body.style.backgroundColor = "red";
});

green.addEventListener("click", () => {
    body.style.backgroundColor = "green";
});

blue.addEventListener("click", () => {
    body.style.backgroundColor = "blue";
});

random.addEventListener("click", () => {
    body.style.backgroundColor = `rgb(${(Math.random()*256)}, ${Math.random()*256}, ${Math.random()*256})`;
});