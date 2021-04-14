import React from 'react';

const RatingCardSvg = ({ rating, progressValue, className }) => {
	return(
		<svg className={className} width="50" height="100" viewBox="0 0 91 93" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path strokeDasharray="268" strokeDashoffset={progressValue} d="M44.8917 3.50427C21.6396 3.83322 3.16911 23.4075 3.5042 47.0941C3.83928 70.7807 22.8561 89.8246 46.1082 89.4957C69.3604 89.1667 87.8309 69.5925 87.4958 45.9059C87.1607 22.2193 68.1439 3.17533 44.8917 3.50427Z" fill="black" stroke="#52BA00" strokeWidth="5"/>
			<text fill="white" xmlSpace="preserve" style={{"whiteSpace": "pre"}} fontFamily="Roboto" fontSize="25" fontWeight="bold" letterSpacing="0em"><tspan x="30.1445" y="54.0449">{rating}</tspan></text>
		</svg>
	);
}

export default RatingCardSvg;
