import React, {useState} from "react";

  function CreatList(props) {
  const [list, setList] = useState({
    title: "",
    author:""

  })

  function handleChange(e) {
    const {name, value} = e.target
    setList(prevList => {
      return {
        ...prevList,
        [name]:value
      }
    })
  }
  function submitList(e) {
    props.onAdd(list);
    e.preventDefault();

  }

  return (
    <div className="list">
     <form>
     
      <label for="title">Title: </label>
      <input type ="text" name="title" value ={list.title} 
      onChange={handleChange} />
      
      <label for="author"> Author: </label>
      <input type ="text" name ="author" valye = {list.author} 
      onChange={handleChange} />      
      <button className ="addButton" type ="submit" 
      onClick ={submitList} >Add</button>
     </form>
    </div> 
  );
}

export default CreatList;