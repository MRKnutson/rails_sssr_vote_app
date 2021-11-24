import axios from "axios";
import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import Items from "./Items";

const App = () => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(()=>{
    getItems();
  },[]);

  const getItems = async ()=> {
    let response = await axios.get("/items");
    // console.log(response.data);
    setItems(response.data)
  };
  // my items state is going to live in my APP component
  const toggleNewForm =() =>{
    setShowNewForm(!showNewForm)
  };

  const addItem = (item) => {
    setItems([item,...items]);
  };

  const deleteItem = async (id) => {
    // removes from db
    let response = await axios.delete(`items/${id}`);
    //remove from ui
    let filteredItems =items.filter((i)=>i.id !== id);
    setItems(filteredItems)
  };

  const updateItem = (item)=>{
    let updatedItems=items.map((i) => (i.id === item.id ? item : i));
    setItems(updatedItems)
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>App component (SPA HERE)</h1>
      <button onClick = {toggleNewForm}>{showNewForm ? "Cancel" : "New Item"}</button>
      {showNewForm && <ItemForm addItem = {addItem} /> }
      <Items items={items} updateItem = {updateItem} deleteItem = {deleteItem} />
    </div>
  );
};

const styles = {
  container: { border: "2px solid red", maxWidth: "800px", margin: "auto" },
  header: {
    color: "green",
  },
};

export default App;
