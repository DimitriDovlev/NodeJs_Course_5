const cardInner = document.querySelector("#cardInner")

const card = (id, name, phoneNumber, imgSrc) => {
    return `<div class="col-md-4">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${imgSrc}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Id: ${id}</h5>
      <h5 class="card-title">Name: ${name}</h5>
      <h5 class="card-title">Phone Number: ${phoneNumber}</h5>
      <button type="button" class="btn btn-info" id="details_${id}">Details</button>
      <button type="button" class="btn btn-warning" id="edit__${id}">Edit</button>
      <button type="button" class="btn btn-danger" id="delete_${id}">Delete</button>
    </div>
  </div>
  </div>`
}
const getUsers = (queryParams = "") => {
    fetch(`http://localhost:5000/users${queryParams}`)
        .then((res) => res.json())
        .then((res) => {
            cardInner.innerHTML = ""

            res.forEach((res) => {
                const {
                    id,
                    name,
                    phoneNumber,
                    imgSrc
                } = res;
                cardInner.innerHTML += card(
                    id,
                    name,
                    phoneNumber,
                    imgSrc
                );

                detailsButton = document.querySelectorAll(".btn-info")
            });

            Array.from(detailsButton).forEach((button) => {
                button.addEventListener("click", (e) => {
                    console.log(e);
                    userDetails(e.target.id.split("__")[1])
                })
            })
        })
        .catch((error) => {
            console.log(error);
        })

}

getUsers();

const userDetails = (id) => {
    console.log("details for: ", id);
    window.location.href = `../userDetails/index.html?id=${id}`
}