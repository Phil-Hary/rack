import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './movieCard';
import Pagination from './pagination';
import { Row, Col } from 'reactstrap';
import ScrollBar from 'react-scrollbars-custom';

const Movies = () => {
	
	const [ movies, setMovies ] = useState([]);
	const [ modal, setModal ] = useState(false);
	const [ pages, setPages ] = useState(0);
	const [ currentPage, setCurrentPage ] = useState(1);

	const toggle = (slug) => {
		setModal(!modal);
		setMovieSlug(slug);
	}
	const [ movieSlug, setMovieSlug ] = useState(''); 
	
	useEffect(() => {
		axios
			.get(`/api/v1/movies/?page=${currentPage}`)
			.then(({data}) => {
				setPages(data.pages);
				setMovies(data.movies);		
			})
			.catch(err => console.log(err));
		
	},[currentPage]);
	
	return (
		<div>
			<ScrollBar style={{ width: "100%", minHeight: "90vh"}}>
			<div className="container mt-4 movies-main">
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
				{(pages)?(<Pagination pages={pages} setPage={setCurrentPage} currentPage={currentPage}/>):""}
			</div>
			</ScrollBar>
		</div>
	)
}

export default Movies;