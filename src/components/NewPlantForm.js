import React, {useState} from "react";

function NewPlantForm({baseURL, onFormSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function submitPlant(e) {
    e.preventDefault()

    fetch(`${baseURL}`, {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newPlantData => onFormSubmit(newPlantData))

  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e) => submitPlant(e)}>
        <input 
          onChange={(e) => handleChange(e)} 
          type="text" 
          name="name" 
          value={formData.name}
          placeholder="Plant name" 
        />
        <input 
        onChange={(e) => handleChange(e)} 
        type="text" 
        name="image" 
        value={formData.image}
        placeholder="Image URL" 
        />
        <input 
        onChange={(e) => handleChange(e)} 
        type="number" 
        name="price" 
        value={formData.price}
        step="0.01" 
        placeholder="Price" 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
