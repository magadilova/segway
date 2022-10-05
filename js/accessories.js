
export function accessories(){
    const cards = [{
        image:"./assets/img/accessories/ROD.png",name:"Extension Rod", description:"The Extension Rod helps you to easily maneuver your scooter, so you no longer need to bend over and push it, making it easier to take with you anywhere.",price:29.99
    }, {
        image:"./assets/img/accessories/ROD.png",name:"Extension Rod", description:"The Extension Rod helps you to easily maneuver your scooter, so you no longer need to bend over and push it, making it easier to take with you anywhere.",price:29.99
    },{
        image:"./assets/img/accessories/ROD.png",name:"Extension Rod", description:"The Extension Rod helps you to easily maneuver your scooter, so you no longer need to bend over and push it, making it easier to take with you anywhere.",price:29.99
    }]

    const accessoriesRow = document.querySelector(".accessories__row")

    cards.forEach(el=>{
        accessoriesRow.insertAdjacentHTML(
            'beforeend',
        `
        <div class="accessories__card flex col-4">
          <div class="accessories__image-block">
            <img src=${el.image} alt="картинка_колонка">
          </div>
          <h3 class="accessories__name">${el.name}
          </h3>
          <p class="accessories__description">${el.description}</p>
          <span class="accessories__price">$${el.price}</span>
          <button class="accessories__btn">ADD TO CART</button>
        </div>
        `
       )   })
        }