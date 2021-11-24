import axios from "axios";
import React, {useState} from "react"

const ItemForm = (props) => {
  const {id, addItem, name: initialName, likes: initialLikes, updateItem } = props;
  // const initialLikes = props.likes
  const [name, setName] = useState(initialName ? initialName : '')
  const [likes, setLikes] = useState(initialLikes ? initialLikes : '')
  const handleSubmit = async (e)=> {
    // prevents reload
    e.preventDefault();
    console.log({name: name, likes: likes});
    const item = {name: name, likes: likes};
    if(id){
      // update logic
      let response = await axios.put(`/items/${id}`, item);
    console.log(response.data);
    // update UI (add response.data in items)
    updateItem(response.data)
    } else {
    // axios call here
    let response = await axios.post('/items', item);
    console.log(response.data);
    // update UI (add response.data to items)
    addItem(response.data);
    }
  };
  return(
    <div style = {styles.container}>
      <h1>{id ? "Edit" : "New" } Item Form</h1>
      <form onSubmit ={handleSubmit}>
        <p>Name:</p>
        <input value = {name} onChange ={(e)=> setName(e.target.value)}/>
        <p>likes:</p>
        <input value = {likes} onChange ={(e)=> setLikes(e.target.value)}/>
        <button>{id ? "Update" : "Create" } </button>
      </form>
    </div>
  );
};

export default ItemForm;

const styles = {
  container:{
    border: "1px solid red",
    margin: "10px",
    padding: "10px",
  },
};