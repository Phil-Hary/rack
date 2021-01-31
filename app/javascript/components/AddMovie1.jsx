import React, { useState } from 'react';
import axios from "axios";
import { Button, Modal, Row, Col, ModalBody, Form , FormGroup, Label, Input} from 'reactstrap';

const AddMovie1 = (props) => {

	const [ movieName, setMovieName] = useState('');
	const [movies, setMovies] = useState([]);

	const findMovie = async () => {
		const { data } = await axios.get(`/api/v1/search-movie/${movieName}`);

		const { movies } = data; 

    let moviesList = [];

    for (let movie of movies){
    const {title, release_date, poster_path} = movie;
    console.log({title, release_date, poster_path})
      moviesList.push(
      	{
      		title, 
      		year: release_date ? release_date.split("-")[0] : "NA", 
      		poster: poster_path
      	}
      )
    }

    setMovies(moviesList);
    
	}

	return(
		<div className="add-movie" >
			<Form style={{color: "white"}}> 
        <Row>
          <Col>
            <FormGroup align="center">
              <Label for="movieName">Movie name</Label>
              <Input type="value" name="title" id="movieName" value={movieName} onChange={e => setMovieName(e.target.value)} placeholder="Enter review title" />
              <Button outline color="success" className="mt-2" onClick={findMovie}>Find movie</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    	{movies && (movies.map(({title, year, poster}) => (
    		<div className="movie-block mt-4">
    	    <div style={{ width: "10%"}} >
    	    	<img src={`https://image.tmdb.org/t/p/w300${poster}`} width="120px" height="120px"/>
    	    </div>
	        <div style={{ display: "flex",flexDirection: "column", justifyContent: "center"}}>
	          <div>{title}</div>
	          <i className="review-desc">{year}</i>
	        </div>
  	        <div>Hi</div>
    	    </div>
    	  )))
    	}
		</div>
	)
}

export default AddMovie1;