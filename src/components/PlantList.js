import React from "react";
import PlantCard from "./PlantCard";

function PlantList({baseURL, plants, onPlantDelete}) {

  const renderPlants = plants.map(plant => (
    <PlantCard 
      plant={plant}
      key={plant.id}
      baseURL={baseURL}
      onPlantDelete={onPlantDelete}
    />
  ))

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
