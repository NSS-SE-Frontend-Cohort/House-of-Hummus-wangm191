import { getEntrees } from "./Getters.js"
import { setEntreeId } from "./TransientState.js"

export const handleEntreeChange = (eventChange) => {
    if (eventChange.target.name === "entree"){
        setEntreeId(JSON.parse(eventChange.target.value))
    }
}

export const EntreeOptions = async () => {
    const entrees = await getEntrees()

    document.addEventListener('change', handleEntreeChange)

    let entreesHTML = "<h2>Base Dish</h2>"

    const entreeOptions = entrees.map(entree => {
        return `<div><input type="radio" name="entree" value=${entree.id}>${entree.name}</div>`
    })
    
    return entreesHTML += entreeOptions.join('')
}