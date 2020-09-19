import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewModal from './reviewModal';

const Movie = (props) => {

	const [ movie, setMovie ] = useState(null);
	let backgroundImage;
	
	useEffect(() => {
		axios
			.get(`/api/v1/movies/${props.match.params.slug}`)
			.then(({data}) => {
				setMovie(data.movie);
			})
			.catch(err => console.log(err));
		
	},[]);
	
	if(movie)
		backgroundImage = movie.img_url.replace("SX250","SX5000");
	return (
		movie && (
			<div className="container-fluid">
				<ReviewModal movie={movie}/>
			</div>
		)
	)
}

export default Movie;