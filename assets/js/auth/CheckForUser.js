import { FoodList, selectList } from "../menu/FoodsList.js";
import { NavBar } from "../NavBar.js";
import * as UserManager from "./UserManager.js"

export const CheckForUser = () => {
    if (sessionStorage.getItem("SOuser")) {
        UserManager.setLoggedInUserAppState(JSON.parse(sessionStorage.getItem("SOuser")));
        NavBar();
        selectList();
        FoodList();
    } else {
        NavBar();
        selectList();
        FoodList();
    }
}