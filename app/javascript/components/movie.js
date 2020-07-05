import React, { useEffect } from 'react';

const Movie = (props) => {
	
	const [ movie, setMovie ] = useState([]);
	
	useEffect(() => {
		axios
			.get(`http://localhost:3000/api/v1/movies/${this.props.match.params.slug}`)
			.then(({data}) => {
				setMovie(data.movie);
			})
			.catch(err => console.log(err));
		
	},[movie.length]);
	
	if(movie)
		const backgroundImage = movie.img_url.replace("SX250","SX5000");
	return (
		<div style={{background-image={backgroundImage}}}>
			<p>Hello</p>
		</div>
	)
}

export default Movie;