import React from 'react';
import Overview from './Overview';
import Details from './Details';

const TabContent = ({ tab, movie }) => {

	const getContent = () => {
		switch(tab) {
			case "overview":
				return <Overview plot={movie.plot}/>
			case "details":
				return <Details movie={movie} />
			default:
				return <Overview plot={movie.plot}/>
		}
	}

	return(
		<div>
			{getContent()}
		</div>
	)
};

export default TabContent;