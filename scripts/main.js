import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

document.addEventListener("purchaseComplete", event => {
    console.log("Purchase successful. Regenerating HTML...")
    renderAllHTML()
} )

renderAllHTML()

