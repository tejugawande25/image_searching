import React from "react";
import "./card.css";

function Card({ url, alt, imagehref, anchortext }) {
  return (
    <div className="search-result">
      <img src={url} alt={alt} />
      <a href={imagehref} target="_blank">
        {anchortext}
      </a>
    </div>
  );
}

export default Card;
