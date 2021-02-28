import React, {useState} from "react";
import EditForm from "./EditForm"

function PlantCard({plant, baseURL, onPlantDelete}) {
  // const {id, name, image, price} = plant
  const [plantInfo, setPlantInfo] = useState({
    name: plant.name,
    price: plant.price,
    image: plant.image,
    id: plant.id
  })
  const [stocked, setStocked] = useState(true)
  const [showForm, setShowForm] = useState(false)

  function deletePlant() {
    onPlantDelete(plantInfo.id)
    fetch(`${baseURL}/${plantInfo.id}`, {
      method: "DELETE"
    })
  }

  return (
    <li className="card">
      <img src={plantInfo.image} alt={plantInfo.name} />
      <h4>{plantInfo.name}</h4>
      <p>Price: {plantInfo.price}</p>
      <span ><button onClick={() => setShowForm(!showForm)} name="price">Edit Price</button></span>
      {stocked ? (
        <button onClick={() => setStocked(!stocked)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setStocked(!stocked)} >Out of Stock</button>
      )}
      <span ><button onClick={deletePlant} name="delete">Delete Plant</button></span>
      { showForm ? <EditForm 
      setPlantInfo={setPlantInfo}
      baseURL={baseURL} 
      id={plantInfo.id} 
      currentPrice={plantInfo.price} 
      /> : null}
    </li>
  );
}

export default PlantCard;
