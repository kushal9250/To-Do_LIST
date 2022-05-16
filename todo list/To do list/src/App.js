import React, { useState } from "react";

function App(){

  
const [data,setdata] = useState("");
const [list,setlist] = useState([]);
var demo;


  function handlechange(event){
    demo = event.target.value;
     return setdata(demo);
    
  }

  function handleclick(){
     
    setlist(function(prev){
      return [...prev ,data];
    })


  }


  function handleform(event){


event.preventDefault();

  }

       

  return <div>
   <form onSubmit = {handleform}>
     <h1>TO DO List !</h1>
  <input type = "text" placeholder = "Write something to do" onChange = {handlechange}/>
  <button type = "submit" onClick = {handleclick} >Add</button>


   </form>

   <ul>
    
    {list.map(function (todoitem){
      return <li>{todoitem}</li>
    })}

   </ul>


    </div>
}

export default App;