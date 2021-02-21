import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MovieCard from './movieCard';
import Pagination from './pagination';
import { Row, Col, Button } from 'reactstrap';
import {RackContext} from '../store';
import {useHistory} from 'react-router-dom';
import ScrollBar from 'react-scrollbars-custom';

const Movies = (props) => {

	const { type } = props;
	let history = useHistory();
	const [ movies, setMovies ] = useState([]);
	const [ modal, setModal ] = useState(false);
	const [ pages, setPages ] = useState(0);
	const [ currentPage, setCurrentPage ] = useState(1);
	const { rackState, rackActions } = useContext(RackContext);

	console.log({rackState});

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
					
							{
								type !== "all" && (
									<Row>
										<Col>
											My Rack
										</Col>
										<Col>
											<Button outline 
												color="success"
												className="mt-2"
												onClick={() => {
												history.push(`/add-movie`);
											}}>
												Add movie
											</Button>
										</Col>
									</Row>
								)
							}
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
