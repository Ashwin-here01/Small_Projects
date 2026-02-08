let counting = document.querySelector("#counting");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset-btn");

let count = 0;

increase.addEventListener("click", () => {
    counting.innerText = ++count;
});

decrease.addEventListener("click", () => {
    if(count != 0) {
        counting.innerText = --count;
    }
});

reset.addEventListener("click", () => {
    counting.innerText = 0;
    count = 0;
});