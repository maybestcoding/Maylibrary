import React from "react";

function BookTable(props) {
  return (
    
  <table className="tableLists">
  
  <tr>
   <td className ="number">1
   </td>
   
    <td className="info">{props.title}</td>
    <td className="info">{props.author}</td>
    
    
  </tr>
  
 
  </table>
  
  );
}

export default BookTable;