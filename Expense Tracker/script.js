const remainingBalance = document.querySelector(".remaining-balance");
const income = document.querySelector(".income");
const expense = document.querySelector(".expense");
const transactionListContainer = document.querySelector(".transaction-list-container");
const listDltBtn = document.querySelectorAll("#list-dlt-btn");
const description = document.querySelector(".description input");
const amount = document.querySelector(".amount input");
const addTBtn = document.querySelector("#add-transaction-btn");
const form = document.querySelector("form");
const errors = document.querySelectorAll(".error");
errors.forEach((error) => {
    error.classList.add("hidden");
})

// let value = 11.00;
// let temp = remainingBalance.innerText;
// console.log(temp);
// if(temp[0] === "-") {
//     temp = -Number(temp.slice(2));
//     temp += value;
//     temp = (Math.round(temp *100) / 100).toFixed(2);
//     if(Number(temp) < 0) {
//         remainingBalance.innerText = "-$" + temp.slice(1);
//     } else {
//         remainingBalance.innerText = "$" + temp;
//     }
//     console.log(temp);
// }


// temp = Number(temp.slice(1));
// temp += value;
// temp = (Math.round(temp * 100) / 100).toFixed(2);
// if(Number(temp) < 0) {
//     // remainingBalance.innerText = "-$" + temp.slice(1);
// }

function changeBalance(value) {
    let temp = remainingBalance.innerText;
    if(temp[0] == "-") {
        temp = -Number(temp.slice(2));
    } else {
        temp = Number(temp.slice(1));
    }
    temp += value;
    temp = (Math.round(temp *100) / 100).toFixed(2);
    if(Number(temp) < 0) {
        remainingBalance.innerText = "-$" + temp.slice(1);
    } else {
        remainingBalance.innerText = "$" + temp;
    }
}

function hideError(i) {
    errors[i].classList.remove("visible");
    errors[i].classList.add("hidden");
}

function showError() {
    if(description.value.trim() === "") {
        errors[0].classList.remove("hidden");
        errors[0].classList.add("visible");
    } else {
        hideError(0);
    }

    if(amount.value.trim() === "") {
        errors[1].classList.remove("hidden");
        errors[1].classList.add("visible");
    } else {
        hideError(1);
    }
}


addTBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

    if(!form.checkValidity()) {
        showError();
        return;
    } else {
        hideError(0);
        hideError(1);
    }

    changeBalance(Number(amount.value.trim()));

    amount.value = "";
    description.value = "";

    
});







/*
If the amount is in -ve it is expense and if it is in +ve it is an income... (accordingly set the right border green or red)
And remove the class transaction-income and trasaction-expense from HTML
*/

// How to store the data on local system?