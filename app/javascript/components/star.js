import React from 'react';

let starRating;
let className;

const buildStars = (score) => {
	starRating = [];
	for(let i=1; i<=5; i++){
		if(i <= score){
			starRating.push(<span className={className}/>);
			continue;
		}
		starRating.push(<span className="fa fa-star"/>);
	}
}

const Stars = (props) => {
	className = (props.big)?("fa fa-star start-checked-big"):("fa fa-star start-checked");
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