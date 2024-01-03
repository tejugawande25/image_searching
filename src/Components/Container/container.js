import React, { useEffect, useState } from "react";
import "./container.css";
import Card from "./card";
import axios from "axios";

function Container() {
  
  const[myData ,setMyData] = useState([]);
  const[page , setPage] = useState(1);
  const[inputData, setInputData] = useState("");
  

  const handleSubmit =(event) =>{
    event.preventDefault();
    axios({
      method:"get",
      url:inputData === ""?"https://api.pexels.com/v1/curated":`https://api.pexels.com/v1/search?query=${inputData}&page=${page}`,
      headers:{
        Authorization:"q2XWLhddx9CAJ69S46dWuJyAfCXizDG4FLdRlUwhhb9FHra0oCQ3Iark",
      },
    })
    .then((res) =>{
      console.log(res.data);
      setMyData(res.data.photos);
    }).catch((error) =>{
      console.log(error);
    })
    
  }

  useEffect(() =>{
    if(inputData === "")
    axios({
      method:"get",
      url:"https://api.pexels.com/v1/curated",
      headers:{
        Authorization:"q2XWLhddx9CAJ69S46dWuJyAfCXizDG4FLdRlUwhhb9FHra0oCQ3Iark",
      },
    })
    .then((res) =>{
      console.log(res.data);
      setMyData(res.data.photos);
    }).catch((error) =>{
      console.log(error);
    })
  },[inputData])

  //show more button
  return (
    <>
      <div className="container">
       <div className="header-section">
        <h1>Image Search</h1>
        </div>
        <form onClick={handleSubmit}>
          <input
            type="search"
            id="search-input"
            placeholder="Search for images"
            onSubmit={handleSubmit}
            onChange={(e)=>{
              setInputData(e.target.value)
            }}
            value={inputData}
          />
         
          <button id="search-button" onClick={handleSubmit} >Search</button>
        </form>
       
       
        {inputData.length > 0 && <p className="paragraph">Here is the result for {inputData}!</p>}
       
        <div className="search-results">
          
        
          {myData.map((item,index) =>{
            return(
              <Card 
              key={`${index}-hb`}
              url={item.src.medium}
              alt={item.id}
              imageKey={index}
              anchortext={item.alt}
              />
            )
          })}
        </div><div className="show-more-container">
        <button className="show-more" >Show More.</button></div>
      </div>
     
    </>
  );
}

export default Container;
