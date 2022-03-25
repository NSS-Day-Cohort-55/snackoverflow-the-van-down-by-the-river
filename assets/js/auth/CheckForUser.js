import { FoodList, selectList } from "../menu/FoodsList.js";
import { NavBar } from "../NavBar.js";
import { LoginForm } from "./LoginForm.js";
import { RegisterForm } from "./RegisterForm.js";
import * as UserManager from "./UserManager.js"
import { showLoginRegister } from "../main.js";

export const CheckForUser = () => {
    if (sessionStorage.getItem("SOuser")) {
        UserManager.setLoggedInUserAppState(JSON.parse(sessionStorage.getItem("SOuser")));
        NavBar();
        selectList();
        FoodList();
    } else {
        showLoginRegister()
    }
}