import React from "react";
import "../App.css";

const Card = ({ title, content }) => {
  const Show = () => {
    return title !== "Dummy";
  };

  return Show() ? (
    <div className="card ">
      <div className="card-heading">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{content}</p>
      </div>
    </div>
  ) : (
    <div className="card" style={{opacity:0}}></div>
  );
};

export default Card;
