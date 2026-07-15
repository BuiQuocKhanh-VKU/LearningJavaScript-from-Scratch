const element = document.getElementById("myBtn");

const handleClickBtn = () => {
    console.log("You clicked a button!");
};
element.addEventListener("click", handleClickBtn);

console.log(element);
