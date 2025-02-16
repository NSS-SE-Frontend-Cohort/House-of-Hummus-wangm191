import { placePurchase } from "./TransientState.js"

export const handlePurchaseCLick = (eventClick) => {
    if (eventClick.target.id === 'purchase'){
        placePurchase()
    }
}

export const createPurchaseCLick = () => {

    document.addEventListener('click', handlePurchaseCLick)

    return "<article class='createPurchase'><button id='purchase'>Purchase Combo</button></article>"
}