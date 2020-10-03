import React from 'react';
import Overview from './Overview';
import Details from './Details';
import AddReview from './addReview';
import Review from './review';

const TabContent = ({ tab, movie }) => {
	switch(tab) {
		case "overview":
			return <Overview plot={movie.plot}/>
		case "details":
			return <Details movie={movie} />
		case "addReview":
			return <AddReview movie={movie}/>
		case "reviews":
			return <Review movie={movie}/>
		default:
			return <Overview plot={movie.plot}/>
	}
};

export default TabContent;