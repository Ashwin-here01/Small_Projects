let inputText = document.querySelector("#inputText");
let addButton = document.querySelector("#addButton");
let doneButton = document.querySelectorAll("#doneButton");
let deleteButton = document.querySelectorAll("#deleteButton");


addButton.addEventListener("click", () => {
    if(inputText.value !== "") {
        let listItem = document.createElement("li");
        let text = inputText.value;
        listItem.innerHTML = `${text}
        <div id="buttons">
        <button class="modifyButtons" id="doneButton">Done</button>
        <button class="modifyButtons" id="deleteButton">Delete</button>
        </div>`;
        document.querySelector("#tasks ul").appendChild(listItem);
        inputText.value = "";

        doneButton = document.querySelectorAll("#doneButton");
        deleteButton = document.querySelectorAll("#deleteButton");

        doneButton.forEach((button) => {
            button.addEventListener("click", () => {
                button.parentElement.parentElement.style.textDecoration = "line-through";
                button.parentElement.parentElement.style.color = "green";
            });
        });

        deleteButton.forEach((button) => {
            button.addEventListener("click", () => {
                button.parentElement.parentElement.remove();
            });
        });
    }
});