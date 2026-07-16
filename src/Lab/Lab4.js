const eUsernameValue = document.getElementById("usernameValue");
const ePasswordValue = document.getElementById("passwordValue");
const loginBtn = document.getElementById("loginBtn");

const showInfor = localStorage.getItem("khanhKey");

if (showInfor) {
    const account2 = JSON.parse(showInfor);
    eUsernameValue.value = account2.username;
    ePasswordValue.value = account2.password;
}

loginBtn.addEventListener("click", () => {
    if (eUsernameValue.value === "khanh" && ePasswordValue.value === "okok") {
        alert("Login Success!");
        const account = {
            username: eUsernameValue.value,
            password: ePasswordValue.value,
        };
        location.href = "Lab4Success.html"
        localStorage.setItem("khanhKey", JSON.stringify(account));
    } else {
        alert("Wrong username or password");
    }
});
