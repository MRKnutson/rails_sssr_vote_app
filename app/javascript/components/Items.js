import React from "react"
import Item from "./Item"

const Items = (props) => {
  const  { items, updateItem, deleteItem } = props;
  return(
    <div style = {styles.container}>
      <h1>Items</h1>
      {items.map((item) => (
        // <Item  key = {item.id} name = {item.name } likes = {item.likes}/>  
        <Item  key = {item.id} {...item} updateItem={updateItem} deleteItem={deleteItem}/>  
      ))}
    </div>
  );
};

export default Items;

const styles = {
  container:{
    border: "1px solid green",
    margin: "10px",
    padding: "10px",
  },
};