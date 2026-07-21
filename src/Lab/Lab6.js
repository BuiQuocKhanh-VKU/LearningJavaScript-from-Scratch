console.log("Lab 6");
const eBtnSave = document.getElementById("btnSave");
const eName = document.getElementById("name");

getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

    //success
    location.href = "Lab6.html";
});
