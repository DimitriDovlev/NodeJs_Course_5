const formValues = () => {
    return {
        userName: document.querySelector("#name").value,
        phoneNumber: document.querySelector("#phoneNumber").value,
        imageURL: document.querySelector("#imgSrc").value
    }
}

let id = null;
let btn = document.querySelector("#submit")


btn.addEventListener("click", (e) => {
    e.preventDefault();
    const user = formValues();


    fetch(`http://localhost:5000/users/addUsers${id || ''}`, {
            method: !id ? "POST" : "PUT",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((message) => {
            console.log(message);
            window.location.href = "../users/user.html";
        });


})

// (() => {
//     let queryParams = window.location.search;
//     if (queryParams) {
//         id = queryParams.split("=")[1];

//         fetch(`http://localhost:5000/users/${id}`)
//             .then((res) => res.json())
//             .then((user) => {
//                 document.querySelector("#name").value = user.userName;
//                 document.querySelector("#phoneNumber").value = user.phoneNumber;
//                 document.querySelector("#imgSrc").value = user.imageURL;
//                 id = user.id;
//             });
//     }
// })();