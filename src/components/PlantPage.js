import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const baseURL = 'http://localhost:6001/plants'
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  const nameFiltered = plants.filter(plant => plant.name.includes(search))
  
  useEffect(() => {
    fetch(baseURL)
    .then(response => response.json())
    .then(data => setPlants(data))
  }, [])
  
  function handleFormSubmit(newPlant){
    console.log(newPlant)
    setPlants([...plants, newPlant])
  }
  
  function handleSearch(plantName) {
    setSearch(plantName)
  }

  function handleDelete(oldPlantId){
    console.log(oldPlantId)
    const notDeleted = plants.filter(plant => plant.id !== oldPlantId)
    setPlants([...notDeleted])
  }

  return (
    <main>
      <NewPlantForm 
        baseURL={baseURL}
        onFormSubmit={handleFormSubmit}
      />
      <Search 
        onSearchChange={handleSearch}
      />
      <PlantList 
        plants={search.length > 0 ? nameFiltered : plants}
        baseURL={baseURL}
        onPlantDelete={handleDelete}
      />
    </main>
  );
}

export default PlantPage;
