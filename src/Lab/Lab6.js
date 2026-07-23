console.log("Lab 6");

const eBtnSave = document.querySelector("#btnSave");
const eName = document.querySelector("#name");
const tbody = document.querySelector("#users");

console.log(tbody);
getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

if (eBtnSave) {
    eBtnSave.addEventListener("click", () => {
        const myTodo = {
            id: getRandomIntInclusive(1, 100),
            name: eName.value,
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
                <td><button>Delete</button></td>
        </tr>`;
            });
        }
    }
};
generateTodoTable();
