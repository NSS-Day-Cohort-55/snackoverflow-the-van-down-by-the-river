import * as MenuManger from "./MenuManger.js";
import { FoodCard } from "./FoodCard.js";

export const selectList = () => {
  const contentTarget = document.querySelector("header");
  let HTML;
  MenuManger.getMenus().then((menuArr) => {
    HTML = `<label for="menuCategory">Sort by Category:</label>
                    <select class= "selectMenu" id="menuSelector">
                    <option value="">Choose Menu</option>`;
    HTML += menuArr
      .map((singleMenuItem) => {
        return `<option id=${singleMenuItem.id} value=${singleMenuItem.id}>${singleMenuItem.name}</option>`;
      })
      .join("");
    HTML += `</select>`;
    contentTarget.innerHTML += HTML;
  });
};
export const FoodList = (menuId) => {
  const contentTarget = document.querySelector("main");
  let HTMLString;
  if (menuId === "") {
    MenuManger.getFoods().then((foodArray) => {
        HTMLString = `<div class="row">`;
        HTMLString += foodArray.map((food) => FoodCard(food)).join("");
        HTMLString += `</div>`;
        contentTarget.innerHTML = HTMLString;
      });
  } else {

      MenuManger.getFoods().then((foodArray) => {
        HTMLString = `<div class="row">`;
        HTMLString += 
        foodArray.map((food) => {
          if (food.menuId === menuId) {
            return FoodCard(food);
          }
        }).join("");
        HTMLString += `</div>`;
        contentTarget.innerHTML = HTMLString;
      });
  }
};

document.addEventListener("change", (evt) => {
  if (evt.target.id === "menuSelector") {
    const id = parseInt(evt.target.value);
    FoodList(id)
  }
});

