import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
    setFoods((foods)=>[...foods,newFood])
  }
   const list = foods.map((food)=>{return <li key={food.id}>{food.name}</li>})

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{list}</ul>
    </div>
  );
}

export default SpicyFoodList;
