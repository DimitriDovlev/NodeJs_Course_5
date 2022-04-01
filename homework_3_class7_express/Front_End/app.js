{
    /* <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="..." alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> */
}

const cardInner = document.querySelector("#cardInner")

const card = (id, name, phoneNumber, imgSrc) => {
    return `<div class="col-md-6">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${imgSrc}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Id: ${id}</h5>
      <h5 class="card-title">Name: ${name}</h5>
      <h5 class="card-title">Phone Number: ${phoneNumber}</h5>
    </div>
  </div>
  </div>`
}

fetch("http://localhost:5000/")
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        cardInner.innerHTML = ""
        console.log(cardInner);

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

        });
    })
    .catch((error) => {
        console.log(error);
    })