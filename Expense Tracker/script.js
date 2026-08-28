const remainingBalance = document.querySelector(".remaining-balance");
const income = document.querySelector(".income");
const expense = document.querySelector(".expense");
const transactionListContainer = document.querySelector(".transaction-list-container");
const description = document.querySelector(".description input");
const amount = document.querySelector(".amount input");
const addTBtn = document.querySelector("#add-transaction-btn");
const form = document.querySelector("form");
const errors = document.querySelectorAll(".error");
errors.forEach((error) => {
    error.classList.add("hidden");
})


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

function changeBalance(value) {
    let temp = remainingBalance.innerText;
    if(temp[0] === "-") {
        temp = -Number(temp.slice(2));
    } else {
        temp = Number(temp.slice(1));
    }
    temp += value;
    temp = (Math.round(temp * 100) / 100).toFixed(2);
    if(Number(temp) < 0) {
        remainingBalance.innerText = "-$" + temp.slice(1);
    } else {
        remainingBalance.innerText = "$" + temp;
    }
}

function changeInEx(value) {
    if(value < 0) {
        let temp = expense.innerText;
        temp = Number(temp.slice(1));
        temp -= value;
        temp = (Math.round(temp *100) / 100).toFixed(2);
        expense.innerText = "$" + temp;
    } else {
        let temp = income.innerText;
        temp = Number(temp.slice(1));
        temp += value;
        temp = (Math.round(temp *100) / 100).toFixed(2);
        income.innerText = "$" + temp;
    }
}

function addList(desc, value) {
    let transactionList = document.createElement("div");
    transactionList.classList.add("transaction-list");
    
    let transactionDescription = document.createElement("div");
    transactionDescription.classList.add("transaction-description");
    transactionDescription.innerText = desc;
    transactionList.append(transactionDescription);
    
    let transactionValue = document.createElement("div");
    transactionValue.classList.add("transaction-value");
    transactionList.append(transactionValue);
    
    let valueSpan = document.createElement("span");
    transactionValue.append(valueSpan);
    
    let dltBtn = document.createElement("button");
    dltBtn.id = "list-dlt-btn";
    dltBtn.innerText = "X";
    transactionValue.append(dltBtn);
    
    if(value < 0) {
        transactionList.classList.add("transaction-expense");
        valueSpan.innerText = "-$" + (Math.round((-value) * 100) / 100).toFixed(2);
    } else {
        transactionList.classList.add("transaction-income");
        valueSpan.innerText = "$" + (Math.round(value * 100) / 100).toFixed(2);
    }
    
    transactionListContainer.append(transactionList);
}

function changeInExDltList(value, inExDiv) {
    let existingValue = inExDiv.innerText.slice(1);
    console.log("Existing value:", existingValue);
    value = existingValue - value;
    console.log("Value", value);
    inExDiv.innerText = "$" + (Math.round(value * 100) / 100).toFixed(2);
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
    
    changeInEx(Number(amount.value.trim()));
    
    addList(description.value.trim(), Number(amount.value.trim()));
    
    amount.value = "";
    description.value = "";
    
    let listDltBtn = document.querySelectorAll("#list-dlt-btn");
    listDltBtn[listDltBtn.length - 1].addEventListener("click", (evt) => {
        let value = listDltBtn[listDltBtn.length - 1].previousElementSibling.innerText.trim();
        if(value[0] === "-") {
            console.log(Number(value.slice(2)));
            changeBalance(Number(value.slice(2)));
            changeInExDltList(Number(value.slice(2)), expense);
        } else {
            console.log(-Number(value.slice(1)));
            changeBalance(-Number(value.slice(1)));
            changeInExDltList(Number(value.slice(1)), income);
        }
        
        evt.target.closest(".transaction-list").remove();
    });
});









// How to add animation for sliding the lists?
// How to store the data on local system?