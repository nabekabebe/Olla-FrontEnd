import React from "react";
import "./card-styles.scss";
import livingRoom from "../../assets/living-room.jpg";

export default function RectCardComponent({ hoverText, image, onClick }) {
  return (
    <div className='rect-card' onClick={onClick}>
      <div
        className='card-rect-item'
        style={{ backgroundImage: `url(${image ? image : livingRoom})` }}></div>
      <h2 className='card-image-caption'>{hoverText}</h2>
    </div>
  );
}
