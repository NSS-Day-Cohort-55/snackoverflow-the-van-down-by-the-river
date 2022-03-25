import * as MenuManger from "./MenuManger.js";
import { FoodCard } from "./FoodCard.js";

export const selectList = () => {
  const contentTarget = document.querySelector("main");
  let HTML;
  MenuManger.getMenus().then((menuArr) => {
    HTML = `<label for="menuCategory">Sort by Category:</label>
                    <select class= selectMenu>`;
    HTML += menuArr
      .map((singleMenuItem) => {
        return `<option id=${singleMenuItem.id}>${singleMenuItem.name}</option>`;
      })
      .join("");
    HTML += `</select>`;
    contentTarget.innerHTML = HTML;
  });
};
export const FoodList = () => {
  const contentTarget = document.querySelector("main");
  let HTMLString;
  MenuManger.getFoods().then((foodArray) => {
    HTMLString = `<div class="row">`;
    HTMLString += foodArray.map((food) => FoodCard(food)).join("");
    HTMLString += `</div>`;
    contentTarget.innerHTML += HTMLString;
  });
};
