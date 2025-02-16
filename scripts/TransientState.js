const transientState = {
    "entreeId": "0",
    "vegetableId": "0",
    "sidesId": "0"
}

export const setEntreeId = (entreeChoice) => {
    transientState.entreeId = entreeChoice
    console.log(transientState)
}

export const setVegetableId = (vegetableChoice) => {
    transientState.vegetableId = vegetableChoice
    console.log(transientState)
}

export const setSidesId = (sidesChoice) => {
    transientState.sidesId = sidesChoice
    console.log(transientState)
} 

export const resetTransientState = () => {
    const reset = "0";
    
    Object.keys(transientState).forEach(key => {
        transientState[key] = reset;
    });

    console.log(transientState)
}

export const placePurchase = async () => {
    //Make sure ids values are not '0'
    Object.values(transientState).forEach(value => {
        if (value == '0'){
            throw new Error("invalid value selected")
        }
    })

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/purchases", postOptions)

    if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    resetTransientState()

    // Create customEvent that changes the brower page when click or change is made
    const customEvent = new CustomEvent("purchaseComplete")
    document.dispatchEvent(customEvent)
} 


