import { EntreeOptions } from "./Entrees.js"
import { createPurchaseCLick } from "./PurchaseOrder.js"
import { Sales } from "./Sales.js"
import { SidesOptions } from "./SideDishes.js"
import { VegetableOptions } from "./Vegetables.js"

export const FoodTruck = async () => {
    const entreesHTML = await EntreeOptions()
    const vegetablesHTML = await VegetableOptions()
    const sidesHTML = await SidesOptions()
    const createPurchaseHTML = createPurchaseCLick()
    const salesHTML = await Sales()
    
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="choices__base options">
                ${entreesHTML}
            </section>

            <section class="choices__veggies options">
                ${vegetablesHTML}
            </section>

            <section class="choices__sides options">
                ${sidesHTML}
            </section>
        </article>

        <article>
            ${createPurchaseHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
