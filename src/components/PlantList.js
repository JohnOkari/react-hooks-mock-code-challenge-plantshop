import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onRemovePlant  }) {
  const plantList = plants.map((plant) => {
    return (
      <PlantCard
      key={plant.id}
      plant={plant}
      onRemovePlant={onRemovePlant}
      />
    );
  });
  return <ul className="cards">{plantList}</ul>;
}

export default PlantList;
