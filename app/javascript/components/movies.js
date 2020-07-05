import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './movieCard';
import { Row, Col } from 'reactstrap';
import ReviewModal from './reviewModal';

const Movies = () => {
	
	const [ movies, setMovies ] = useState([]);
	const [modal, setModal] = useState(false);
	const toggle = (slug) => {
		setModal(!modal);
		setMovieSlug(slug);
	}
	const [ movieSlug, setMovieSlug ] = useState(''); 
	
	useEffect(() => {
		axios
			.get('http://localhost:3000/api/v1/movies')
			.then(({data}) => {
				setMovies(data.movies);
			})
			.catch(err => console.log(err));
		
	},[movies.length]);
	
	return (
		<div>
			<div className="container mt-4">
				<Row>
				{ (movies)?(
					movies.map((movie) => {
						return (
						<Col sm={2}>
							<MovieCard movie={movie} toggle={toggle}/>
						</Col>
						)
					})):""}
				</Row>
			</div>
			{
				<ReviewModal modal={modal} toggle={toggle} />
			}
		</div>
	)
}

export default Movies;