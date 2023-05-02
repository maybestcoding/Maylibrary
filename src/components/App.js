import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateList from "./CreateList";
import BookTable from "./BookTable";
import BookTableFix from "./BookTableFix";



function App() {
  const [lists, setLists] = useState([]);

  function addList(newList) {
        setLists(prevLists => {
            return  [...prevLists, newList]

            })
        
    
    }
  return (
    <div>
      <Header />
      <CreateList onAdd = {addList}/>
      <BookTableFix />
      {lists.map(listItem => {
        return <BookTable title ={listItem.title} author = {listItem.author}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
