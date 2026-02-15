let text = document.querySelector("#text");
let count = document.querySelector("#count");

text.addEventListener("input", () => {
    let InnerText = text.value;
    count.innerText = InnerText.length;
    if(innerText.length == 200) {
        count.style.color = "red";
    } else {
        count.style.color = "black";
    }
});