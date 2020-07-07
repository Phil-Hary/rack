import React, { useState } from 'react';
import { checkPropTypes } from 'prop-types';



let stars = [];

const getStars = (onStar, setOnStar, setSelectedStar, setScore) => {
  stars=[];
  for (let i = 1; i <= 5; i++) {
    if(i <= onStar){
      stars.push(
        <span 
          className="fa fa-star start-checked" 
          style={{ fontSize: "24px"}} 
          data-value={i} 
          onMouseEnter={e => setOnStar(e.target.dataset.value)} 
          onClick={(e)=>{
            setSelectedStar(e.target.dataset.value);
            setScore(e.target.dataset.value);
          }}
        />
      );
      continue;
    }
    stars.push(<span className="fa fa-star" data-value={i} onMouseEnter={e => setOnStar(e.target.dataset.value)} onClick={()=>{setSelectedStar(e.target.dataset.value)}}/>);

  }
}

const ReviewRating = (props) => {
  const [onStar, setOnStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);

  getStars(onStar, setOnStar, setSelectedStar, props.score);

  return (
    <div onMouseLeave = {() => setOnStar(selectedStar)}>
    {
      stars
    }
    {
      <p>{onStar}/5</p>
    }
    </div>
  )
}

export default ReviewRating;