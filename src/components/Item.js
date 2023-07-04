import React, {useState} from "react";

function Item({ name, category }) {
 const [addCart, setAddCart] = useState('Add to Cart');

  function handleAdd() {
   setAddCart(addCart === 'Add to Cart'? 'Remove from Cart' : 'Add to Cart')
  }
  return (
    <li className={addCart === 'Add to Cart' ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>{addCart}</button>
    </li>
  );
}

export default Item;
