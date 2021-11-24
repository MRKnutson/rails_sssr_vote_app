import React from "react"
import ItemForm from "./ItemForm";

const Item = (props) => {
  const {name, likes, id, category, description, deleteItem } = props;
  return (
    <div style= {styles.container}>
      <h1>{name}</h1>
      <p>likes: {likes}</p>
      <p>id: {id}</p>
      <p>category: {category}</p>
      <p>description: {description}</p>
      <hr />
      {/* <ItemForm id = {id} name = {name} likes = {likes}/> */}
      <ItemForm {...props}/>
      <hr />
      <button onClick={()=>deleteItem(id)}>Delete</button>
    </div>
  )
};

export default Item;

const styles = {
  container:{
    border: "1px solid blue",
    margin: "10px",
    padding: "10px",
  },
};