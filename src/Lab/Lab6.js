console.log("Lab 6");

const eBtnSave = document.querySelector("#btnSave");
const eName = document.querySelector("#name");
const tbody = document.querySelector("#users");

if (eBtnSave) {
    eBtnSave.addEventListener("click", () => {
        const myTodo = {
            id: Date.now(),
            name: eName.value.trim(),
        };
        const currentTodoStr = localStorage.getItem("khanhKey");
        if (currentTodoStr) {
            const currentTodo = JSON.parse(currentTodoStr);
            currentTodo.push(myTodo);
            localStorage.setItem("khanhKey", JSON.stringify(currentTodo));
        } else {
            localStorage.setItem("khanhKey", JSON.stringify([myTodo]));
        }
        location.href = "Lab6.html";
    });
}

const generateTodoTable = () => {
    const todoListStr = localStorage.getItem("khanhKey");
    if (todoListStr) {
        todoList = JSON.parse(todoListStr);

        const tbody = document.querySelector("#todo tbody");
        if (todoList && todoList.length) {
            todoList.forEach((item, index) => {
                tbody.innerHTML += `  
        <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td><button 
                data-id = ${item.id} 
                class = "btn-delete" >
                Delete</button></td>
        </tr>`;
            });
        }
    }
};
generateTodoTable();

const eDelete = document.querySelectorAll(".btn-delete");
if (eDelete) {
    eDelete.forEach((btn, index) => {
        console.log(btn);
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            handleDelete(id);
        });
    });
}

const handleDelete = (id) => {
    const todoListStr = localStorage.getItem("khanhKey");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);

        const newTodo = todoList.filter((todo, index) => todo.id + "" !== id);

        localStorage.setItem("khanhKey", JSON.stringify(newTodo));
        location.reload();
    }
};
