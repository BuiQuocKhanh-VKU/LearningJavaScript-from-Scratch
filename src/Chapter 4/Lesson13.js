const element = document.getElementById("login");

element.addEventListener("click", () => {
    console.log("clicked");
    alert("oke");
});



const btn = document.getElementById("inputBtn");
const inputValue = document.getElementById("name");

const previousValue = document.getElementById("preMessage")
const previousName = localStorage.getItem("Name")
if (previousName) {
    previousValue.innerHTML = `<b>${previousName}</b>`;
}

btn.addEventListener("click", () => {
    //alert("Da nhan btn");
    // console.log(inputValue.value)
    localStorage.setItem("Name", inputValue.value)
    document.getElementById("message").innerHTML = `<b>${inputValue.value}</b>`;
});
