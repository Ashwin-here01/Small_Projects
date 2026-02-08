let text = document.querySelector("#text");
let count = document.querySelector("#count");

text.addEventListener("input", () => {
    let innerText = text.value;
    count.innerText = innerText.length;
    if(innerText.length == 200) {
        count.style.color = "red";
    } else {
        count.style.color = "black";
    }
});