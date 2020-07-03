import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
	
	const [ movies, setMovies ] = useState([]);
	
	useEffect(() => {
		axios
			.get('http://localhost:3000/api/v1/movies')
			.then(({data}) => {
				setMovies(data.movies);
			})
			.catch(err => console.log(err));
		
	},[]);
	
	return (
		<div>
			Movies1#index
			{ (movies)?(
				movies.map((movie) => {
					return <p>{movie.movie_name}</p>
				})):""}
		</div>
	)
}

export default Movies;