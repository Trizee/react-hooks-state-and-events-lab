import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [category , setCategory] = useState('All')
  
  const itemDisplay = items.filter((item)=>{
    
      if (category === 'All'){
        return true
      } else {
        return item.category === category
      }
    
  })

  function sort(e){
    setCategory(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={sort}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
