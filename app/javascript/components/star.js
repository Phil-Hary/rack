import React from 'react';

let starRating;

const buildStars = (score) => {
	starRating = [];
	for(let i=1; i<=5; i++){
		if(i <= score){
			starRating.push(<span className="fa fa-star start-checked"/>);
			continue;
		}
		starRating.push(<span className="fa fa-star"/>);
	}
}

const Stars = (props) => {
	buildStars(props.score);
	return (
		<div>
		{
			starRating
		}
		</div>
	);
}

export default Stars;