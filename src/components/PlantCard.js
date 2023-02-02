import React, { useState } from "react";

function PlantCard({ plant, id, onRemovePlant }) {
  const [inSock, setInStock] = useState(true);
  

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });
    onRemovePlant(id);
  }
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inSock ? (
        <button onClick={() => setInStock(false)} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={() => setInStock(true)}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick} className="emoji-button delete">
        🗑
      </button>
    </li>
  );
}

export default PlantCard;
