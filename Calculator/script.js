let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let operatorBtn = document.querySelectorAll(".operator-btn");
let equal = document.querySelector("#equal");
let output = document.querySelector("#output");

operatorBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(1.05)";
        btn.style.backgroundColor = "#E1C6B7";
    });
});

// Coolers : https://coolors.co/993955-eff1f3-dbd3d8-e1c6b7-d77a61