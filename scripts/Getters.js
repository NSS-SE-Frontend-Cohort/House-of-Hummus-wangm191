export const getEntrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    return await response.json()
}

export const getVegetables = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    return await response.json()
}

export const getSides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    return await response.json()
}

export const getPurchases = async () => {
    const response = await fetch("http://localhost:8088/purchases")
    return await response.json()
}