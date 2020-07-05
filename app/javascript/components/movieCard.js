import React from 'react';
import {useHistory} from 'react-router-dom';
import Stars from './star';

const MovieCard = (props) => {
	
	let history = useHistory();
	
	console.log(props.movie);
	return (
		<div className="card-container">
			<img src={props.movie.img_url} alt="Avatar" className="card-image" />
			<div className="card-overlay">
				<div className="card-text">
				<p>{props.movie.movie_name}</p>
				<p>Reviews {props.movie.reviews.length} </p>
				<i style={{fontSize: "15px"}}> Rack Rating </i>
				<Stars score={props.movie.average_score}/>
				<button 
					type="button"
					className="btn btn-outline-success mt-2"
					onClick={()=>{
						history.push(`/${props.movie.slug}`);
					}}
				>
					Reviews
				</button>
			</div>
			</div>
		</div>
	)
};

export default MovieCard;