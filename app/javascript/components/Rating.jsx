import React from 'react';
import RatingCardSvg from './Common/SVG/RatingCardSvg';
import MetacriticSvg from './Common/SVG/MetacriticSvg';
import IMDBSvg from './Common/SVG/IMDBSvg';
import RottenTomatoSvg from './Common/SVG/RottenTomatoSvg';
import RackSvg from './Common/SVG/RackSvg';

const getMaxRating = (type, rating) => {
	if (type === "Internet Movie Database") {
		return [ Number(rating.split("/")[0]), (268/10) * Number(rating.split("/")[0]), IMDBSvg];
	} else if (type === "Rotten Tomatoes") {
		return [ Number(rating.split("%")[0]), (268/100) * Number(rating.split("%")[0]), RottenTomatoSvg];
	} else if (type === "Rack") {
		return [ Number(rating), (268/10) * Number(rating) * 2, RackSvg];
	} else {
		return [ Number(rating.split("/")[0]), (268/100) * Number(rating.split("/")[0]), MetacriticSvg];
	}
}

const Rating = ({ type, rating:score }) => {
	const [ ratingValue, setRatingValue ]  = React.useState(268);
	const [ rating, maxRating, RatingSvg ] = getMaxRating(type, score);

	React.useEffect(() => {
		for(let i = 0; i <= maxRating; i++) {
			console.log("here");
			setRatingValue(268 + i);
		}},[])

	return(
		<div className="mr-4">
			<RatingSvg />
		 	<RatingCardSvg rating={rating} progressValue={ratingValue} className="ml-2"/>
		</div>
	);
}

export default Rating;
