import { getVegetables } from "./Getters.js"
import { setVegetableId } from "./TransientState.js"

export const handleVegetableChange = (eventChange) => {
    if(eventChange.target.name === 'vegetable'){
        setVegetableId(JSON.parse(eventChange.target.value))
    }
}

export const VegetableOptions = async () => {
    const vegetables = await getVegetables()

    document.addEventListener('change', handleVegetableChange)    

    let vegetablesHTML = "<h2>Vegetable</h2>"

    const vegetableOptions = vegetables.map(vegetable => {
        return `<div><input type="radio" name="vegetable" value=${vegetable.id}>${vegetable.type}</div>`
    })

    return vegetablesHTML += vegetableOptions.join('')
}
