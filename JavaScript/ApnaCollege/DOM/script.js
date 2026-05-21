let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let msg = document.querySelector(".msg");
let title = document.getElementById("title");

addBtn.addEventListener("click", function () {
    let task = input.value.trim();

    if (task === "") {
        alert("Please Enter Task");
        return;
    }

    msg.innerText = "";
    title.style.color = "blue";

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", function () {
        li.remove();

        if (taskList.children.length === 0) {
            msg.innerText = "No Tasks Available";
            title.style.color = "black";
        }
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";
});