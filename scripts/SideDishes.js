import { getSides } from "./Getters.js"
import { setSidesId } from "./TransientState.js"

export const handleSidesChange = (eventChange) => {
    if(eventChange.target.name === 'sideDish'){
        setSidesId(JSON.parse(eventChange.target.value))
    }
}

export const SidesOptions = async () => {
    const sides = await getSides()

    document.addEventListener('change', handleSidesChange)    

    let sidesHTML = "<h2>Sides</h2>"

    const sidesOptions = sides.map(side => {
        return `<div><input type="radio" name="sideDish" value=${side.id}>${side.title}</div>`
    })

    return sidesHTML += sidesOptions.join('')
}

