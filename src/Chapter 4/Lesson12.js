const myTextElement = document.getElementById("myText");
const myBtnElement = document.getElementById("myBtn");
const backMyBtnElement = document.getElementById("backMyBtn");
// console.log(myTextElement, myBtnElement);

myBtnElement.addEventListener("click", () => {
    console.log("Clicked");
    myTextElement.innerText = "Changed";
    myTextElement.style.color = "red"
    myTextElement.style.background= "green"
});

backMyBtnElement.addEventListener("click", () => {
    console.log("Clicked 2");
    myTextElement.innerText = "Video hehee";
    myTextElement.style.background= "unset"
});
