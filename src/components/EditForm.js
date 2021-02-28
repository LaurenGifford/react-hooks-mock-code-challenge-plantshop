import React, {useState} from "react"

function EditForm ({baseURL, id, currentPrice, setPlantInfo}) {
    const [price, setPrice] = useState(currentPrice)

    function prepareSubmit(e) {
        e.preventDefault()
        const priceData = {
            price: parseFloat(price)
        }
        fetch(`${baseURL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" :'application/json'
            },
            body: JSON.stringify(priceData)
        })
        .then(response => response.json())
        .then(data => setPlantInfo({
            ...data,
            price: data.price
        }))
    }

    return (
        <form onSubmit={(e) => prepareSubmit(e)}>
            <label>Edit Price</label>
            <input 
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            min={0}
            step="0.01"
            name="price"
            value={price}
            placeholder="$$" ></input>
        </form>
    )
}

export default EditForm 