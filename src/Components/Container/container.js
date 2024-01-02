import React from "react";
import "./container.css";
import Card from "./card";

function Container() {
  function onSearchClick(){

  }

  return (
    <>
      <div className="container">
        <h1>Image Search App</h1>
        <form action="">
          <input
            type="text"
            id="search-input"
            placeholder="Search for images"
          />
          <button id="search-button" onClick={onSearchClick}>Search</button>
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
             "https://images.pexels.com/photos/5707491/pexels-photo-5707491.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            imagename={"Motivational."}
            imagehref={
              "https://images.pexels.com/photos/5707491/pexels-photo-5707491.jpeg?auto=compress&cs=tinysrgb&w=600"
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
