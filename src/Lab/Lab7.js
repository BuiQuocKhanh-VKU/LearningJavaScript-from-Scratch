console.log("Hi Lab 7");

const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();

    const tbody = document.querySelector("#blog tbody");
    if (data) {
        data.forEach((item, index) => {
            // console.log(item)
            tbody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.author}</td>
                <td>${item.content}</td>
                <td><button 
                class = "delete-blog"
                data-id = ${item.id}
                 >
                Delete</button></td>
             </tr>
            `;
        });
    }
};

const addNewBlog = async () => {
    const eTitle = document.getElementById("title");
    const eAuthor = document.getElementById("author");
    const eContent = document.getElementById("content");
    const eSaveBtn = document.querySelector("#saveBtn");

    eSaveBtn.addEventListener("click", async () => {
        // call api
        const rawResponse = await fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                Accept: "Appication/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value,
            }),
        });
        const data = await rawResponse.json();
        console.log(data);
        handleAddNewRow(data);
    });
};

const handleAddNewRow = (item) => {
    const tableBody = document.querySelector("#blog tbody");

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.author}</td>
                <td>${item.content}</td>
                <td><button 
                class = "delete-blog"
                data-id = ${item.id}
                 >
                Delete</button></td>
             </tr>
      `;
    tableBody.appendChild(newRow);

    //gan onclick
    const btn = document.querySelector(`[data-id="${item.id}"]`);
    btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        // call api
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "Appication/json",
                "Content-Type": "application/json",
            },
        });
        const data = await rawResponse.json();

        // delete row
        const row = btn.closest("tr");
        row.remove();
    });
};

const handleDeleteBtn = async () => {
    const btn = document.querySelectorAll(".delete-blog");
    btn.forEach((btn, index) => {
        btn.addEventListener("click", async () => {
            const id = btn.getAttribute("data-id");
            // call api
            const rawResponse = await fetch(
                `http://localhost:8000/blogs/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Accept: "Appication/json",
                        "Content-Type": "application/json",
                    },
                },
            );
            const data = await rawResponse.json();

            // delete row
            const row = btn.closest("tr");
            row.remove();
        });
    });
};

addNewBlog();
fetchBlogs().then(() => {
    handleDeleteBtn();
});
