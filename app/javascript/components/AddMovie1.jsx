import React, { useState, useContext } from 'react';
import axios from "axios";
import {RackContext} from '../store';
import ScrollBar from 'react-scrollbars-custom';
import { Button, Modal, Row, Col, ModalBody, Form , FormGroup, Label, Input} from 'reactstrap';

const AddMovie1 = (props) => {

	const [ movieName, setMovieName] = useState('');
	const [movies, setMovies] = useState([]);
	const { rackActions } = useContext(RackContext);

	const findMovie = async () => {
		const { data } = await axios.get(`/api/v1/search-movie/${movieName}`);

		const { movies } = data; 

    let moviesList = [];

    for (let movie of movies){
    const {title, release_date, poster_path, backdrop_path, popularity} = movie;
      moviesList.push(
      	{
      		title, 
      		year: release_date ? release_date.split("-")[0] : "NA", 
      		poster: poster_path,
      		backDropPath: backdrop_path,
      		popularity,
      	}
      )
    }

    setMovies(moviesList);
	}

	const addMovie = async (title, year, poster, backDropPath, popularity) => {

		const {data, status } = await axios.post("/api/v1/add-movie-to-rack",{
				movieDetails: { title, year, poster, backDropPath, popularity }
		});

		if(status === 200) {
			rackActions.displayAlert(data.message, "success");
		} else {
			rackActions.displayAlert("Oops something went wrong", "success");
		}

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
      <ScrollBar style={{ minHeight: "50vh"}}>
      	<div className="add-movie-list">
		    	{movies && (movies.map(({title, year, poster, backDropPath, popularity}) => (
		    		<div className="movie-block mt-4">
		    	    <div>
		    	    	<img src={`https://image.tmdb.org/t/p/w300${poster}`} width="120px" height="120px"/>
		    	    </div>
			        <div style={{ display: "flex",flexDirection: "column", justifyContent: "center"}}>
			          <div>{title}</div>
			          <i className="review-desc">{year}</i>
			        </div>
		  	        <div style={{ display: "flex", alignItems:"center" }}>
		  	        	<Button outline color="primary" className="mt-2" onClick={() => addMovie(title, year, poster, backDropPath, popularity)}>Add to Rack</Button>
		  	        </div>
		    	    </div>
		    	  )))
		    	}
		    </div>
  		</ScrollBar>  
		</div>
	)
}

export default AddMovie1;