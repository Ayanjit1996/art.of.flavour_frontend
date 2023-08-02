import React from 'react';
import Card from './card';
import "../App.css"
import { useState } from 'react';
import left_arrow from "../images/left_arrow.png"
import right_arrow from "../images/right_arrow.png"

const CardList = ({ data }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className='content_container border_all'>
      <button onClick={handlePreviousCard} className='left_arrow_div' >
        <img src={left_arrow} className='left_arrow' />
      </button>
      <div className="content border_all">
        <div className='card1 border_all'>
          <Card key={currentCardIndex % 8} title={data[currentCardIndex % 8].title} content={data[currentCardIndex % 8].content} />
        </div>
        <div className='card2'>
          <Card key={(currentCardIndex + 1) % 8} title={data[(currentCardIndex + 1) % 8].title} content={data[(currentCardIndex + 1) % 8].content} />
        </div>
        <div className='card3'>
          <Card key={(currentCardIndex + 2) % 8} title={data[(currentCardIndex + 2) % 8].title} content={data[(currentCardIndex + 2) % 8].content} />
        </div>
        <div className='card4'>
          <Card key={(currentCardIndex + 3) % 8} title={data[(currentCardIndex + 3) % 8].title} content={data[(currentCardIndex + 3) % 8].content} />
        </div>
      </div>
      <button onClick={handleNextCard} className='right_arrow_div' >
        <img src={right_arrow} className='right_arrow' />
      </button>
    </div>
  );
};

export default CardList;
