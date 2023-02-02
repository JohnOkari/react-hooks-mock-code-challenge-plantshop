import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plantData) => setPlants(plantData));
  }, []);

  const plantFilter = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleRemovePlant(id) {
    const newPlants = plants.filter((plant) => plant.id !== id);
    setPlants(newPlants);
  }

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search setSearch={setSearch} />
      <PlantList plants={plantFilter} onRemovePlant={handleRemovePlant} />
    </main>
  );
}

export default PlantPage;
