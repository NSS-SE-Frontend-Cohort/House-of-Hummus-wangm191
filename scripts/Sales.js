import { getEntrees, getSides, getVegetables } from "./Getters.js"

export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases")
    .then(res => res.json())

    const entreeOptions = await getEntrees()
    const vegetableOptions = await getVegetables()
    const sidesOptions = await getSides()

    let reciptNum = 0

    let salesDivs = sales.map(sale => {
        const entree = entreeOptions.find(entree => String(entree.id) === String(sale.entreeId))
        const vegetable = vegetableOptions.find(vegetable => String(vegetable.id) === String(sale.vegetableId))
        const sides = sidesOptions.find(sides => String(sides.id) === String(sale.sidesId))

        let totalPrice = entree.price + vegetable.price + sides.price
        totalPrice = totalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        reciptNum ++
        return `<div id='sales'>Receipt #${reciptNum.toString()} = ${totalPrice}</div>`
    })

    if (salesDivs.length == 0) {
        return "<div id='noSales'>No sales have been found.</div>"
    }

    salesDivs = salesDivs.join("")
     
    return salesDivs
}



    // let salesDivs = sales.map(sale => {
    //    const entree = entreeOptions.find(entree => String(entree.id) === String(sale.entreeId))
    //    const vegetable = vegetableOptions.find(vegetable => String(vegetable.id) === (sale.vegetableId))
    //    const sides = sidesOptions.find(sides => String(sides.id === String(sale.sidesId)))

    //    return {
    //     ...sale,
    //     entreeId: sale.entreeId,
    //     entree,
    //     vegetableId: sale.vegetableId, 
    //     vegetable,
    //     sidesId: sale.sidesId,
    //     sides
    //    }
    // }).join("")