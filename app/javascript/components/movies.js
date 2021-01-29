import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './movieCard';
import Pagination from './pagination';
import { Row, Col } from 'reactstrap';
import ScrollBar from 'react-scrollbars-custom';

const Movies = (props) => {

	const { type } = props;
	const [ movies, setMovies ] = useState([]);
	const [ modal, setModal ] = useState(false);
	const [ pages, setPages ] = useState(0);
	const [ currentPage, setCurrentPage ] = useState(1);

	const url = type === "all" ? `/api/v1/movies/?page=${currentPage}` : `/api/v1/user-rack/?page=${currentPage}`

	const toggle = slug => {
		setModal(!modal);
		setMovieSlug(slug);
	}
	const [ movieSlug, setMovieSlug ] = useState(''); 
	
	useEffect(() => {
		axios
			.get(url)
			.then(({data}) => {
				setPages(data.pages);
				setMovies(data.movies);		
			})
			.catch(err => console.log(err));
		
	},[currentPage, url]);

	return (
		<div>
			<ScrollBar style={{ width: "100%", minHeight: "90vh"}}>
				<div className="mt-4 movies-main">
					<Row>
						{ movies && (
								movies.map(movie => (
									<Col sm={2} className="d-flex justify-content-center mt-5">
										<MovieCard movie={movie} toggle={toggle} />
									</Col>
								)))
						}
					</Row>
					{pages > 1 && (
						<Pagination pages={pages} setPage={setCurrentPage} currentPage={currentPage} />
					)}
				</div>
			</ScrollBar>
		</div>
	)
}

export default Movies;
