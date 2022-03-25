const isVeg = (foodObj) => { 
    if (foodObj.isVegetarian) {
        return `<div class="image">
        <image src="./assets/images/icon-veg.png" alt="vegetarian-icon">
        </div>`
 } else {
    return ``
 }
}

export const FoodCard = (foodObj) => {
    return `
    <div class="col-sm-6 g-4">
    <div class="card">
    <div class="h-100">
    <img src="./assets/images/${foodObj.imageURL}" class="card-img-top" alt="${foodObj.imageURL}">
    </div>
    <div class="card-body">
    <h5 class="card-title">${foodObj.name}</h5>
    <p class="card-text">${foodObj.description}</p>
    <p>Price: $${foodObj.price}</p>
    <button type="button" class="btn btn-primary">Example Bootstrap Button</button>
    <label for="quantity">Quantity</label>
    <input type="number" id="quantity">
    <hr/>
    ${isVeg(foodObj)}
    </div>
    </div>
    </div>
    `
}


