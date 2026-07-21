const fetchData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log("check data:", data);

    const tbody = document.querySelector("#users tbody");
    if (data && data.length) {
        data.forEach((item, index) => {
            tbody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
            </tr>   `;
        });
    }
};
fetchData();
