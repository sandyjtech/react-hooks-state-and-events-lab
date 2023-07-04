import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterFoods, setFilterFoods] = useState("All");

  function handleFilterChange(event) {
    setFilterFoods(event.target.value);
  }

  const filteredItems = items.filter((item) => {
    if (filterFoods === "All") {
      return true;
    } else {
      return item.category === filterFoods;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
