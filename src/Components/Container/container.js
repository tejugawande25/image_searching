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
            imagehref={"https://unsplash.com/photos/lsdA8QpWN_A"}
            anchortext={"Coffee and More."}
          />
          <Card
            url={
              "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            imagename={"Explore Nature."}
            imagehref={"https://unsplash.com/photos/lrhF4w-KKjA"}
            anchortext={"Explore Nature."}
          />

          <Card
            url={
              "https://images.unsplash.com/photo-1690537371861-8f047b7eaa21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            imagename={"Motivational."}
            imagehref={
              "https://unsplash.com/photos/a-sign-that-says-today-will-be-a-good-day-GtKEIICYtGc"
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
