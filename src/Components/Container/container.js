import React, { useEffect, useState } from "react";
import "./container.css";
import Card from "./card";
import axios from "axios";

function Container() {
  
  const[myData ,setMyData] = useState([]);
  const[inputData, setInputData] = useState("");
  const[finalData , setFinalData] = useState("");
   
  
  const handleInputChange =(event) =>{
    setInputData(event.target.value);
  }

  const handleSubmit =(event) =>{
    event.preventDefault();
    setFinalData(inputData);
    
  }

  useEffect(() =>{
    axios({
      method:"get",
      url:`https://api.pexels.com/v1/search?query=${finalData}`,
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
  },[handleSubmit])

  return (
    <>
      <div className="container">
       <div className="header-section">
        <h1>Image Search</h1>
        </div>
        <form onClick={handleSubmit}>
          <input
            type="text"
            id="search-input"
            placeholder="Search for images"
            onChange={handleInputChange}
          />
          <button id="search-button" >Search</button>
        </form>
        <div className="search-results">
          <Card
            url={
              "https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt={"coffee and more."}
            imagehref={"https://www.pexels.com/photo/person-sitting-facing-laptop-computer-with-sketch-pad-57690/"}
            anchortext={"Coffee and More."}
          />
          <Card
            url={
              "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            imagename={"Explore Nature."}
            imagehref={"https://www.pexels.com/photo/three-men-standing-near-waterfalls-2387873/"}
            anchortext={"Explore Nature."}
          />

          <Card
            url={
             "https://images.pexels.com/photos/6230963/pexels-photo-6230963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            imagename={"Motivational."}
            imagehref={
              "https://www.pexels.com/photo/close-up-shot-of-scrabble-tiles-on-a-white-surface-6230963/"
            }
            anchortext={"Motivational."}
          />
        </div>
      </div>
      <button id="show-more-button" >Show More</button>
    </>
  );
}

export default Container;
