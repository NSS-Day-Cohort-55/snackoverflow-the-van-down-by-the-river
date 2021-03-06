const apiURL = "http://localhost:8088";

export const getFoods = () => {
    return fetch(`${apiURL}/foods?_sort=price&_order=asc`)
    .then(response => response.json())
}
export const getMenus = () => {
    return fetch(`${apiURL}/menus`)
    .then(response => response.json())
}