import React, { useState, useEffect } from 'react';
import image from 'images/create_movie.jpg';
import { Button, Modal, Row, Col, ModalBody, Form , FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import AsyncSelect from 'react-select/async';

const AddMovie = (props) => {
  const {
    toggle,
    modal
  } = props;

  const [ movieName, setMovieName ] = useState('');
  const [ imgUrl, setImgUrl ] = useState('');
  const [ movieData, setMovieData ] = useState({
    imageUrl: null,
    year: null,
    rated: null,
    genre: null,
    plot: null,
    ratings: null,
    backdrop: null,
  });

  // useEffect(() => {
  //   axios
  //     .get(`/api/v1/search-movie/${movieName}`).then(({status}) => {
  //       if(status === 200){
  //         console.log("success")
  //       }
  //     })
  //     .catch(err => console.log(err))
  // }, [movieName]);

  const getMovies = async (movie, callback) => {
    const movies = await axios.get(`/api/v1/search-movie/${movieName}`);

    let moviesList = [];

    for (movie of movies){
      moviesList.push(movie.title)
    }
    callback(moviesList);
  }

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    setMovieName(inputValue );
    return inputValue;
  };

  const handleSubmit = () => {
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    axios
      .post('/api/v1/movies', {
        movie: {
          movie_name: movieName,
          img_url: imgUrl,
          ...movieData
        }
      }, { headers: {
       'Content-Type': 'application/json',
       'X-CSRF-Token': csrf
      },
    })
      .then(({ status }) => {
        if (status === 200) { 
          window.location.reload();
        }
      })
      .catch(err => console.log(err))
}

  const getMovieData = async () => {
    // axios
    //   .post("/api/v1/movie-data",{
    //     search: {
    //       movieName,
    //     }
    //   })
    //   .then(({data}) => {
    //     console.log(data)
    //     movieData = data;
    //     console.log(movieData);
    //     setImgUrl(data.poster.replace("SX500", "SX250"));
    //   })
    //   .catch(err => console.log(err))

      const { data } = await axios.post("/api/v1/movie-data", { 
        search: {
          movieName,
        }
      });
      setImgUrl(data.poster.replace("SX500", "SX250"));
      const { poster, ...newData} = data
      setMovieData(newData);
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody className="movie-create-body pb-5">
        <Form style={{color: "white"}}> 
          <Row>
            <Col sm="12">
              <img src={image} width="100%" height="200px" className="refection"/>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm="12">
              <FormGroup>
                <Label for="movieName">Movie name</Label>
                <Input type="value" name="title" id="movieName" value={movieName} onChange={e => setMovieName(e.target.value)} placeholder="Enter review title" />
                 <AsyncSelect
                  cacheOptions
                  loadOptions={getMovies}
                  defaultOptions
                  onInputChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FormGroup>
                <Label for="img_url">Img Url</Label>
                <Input type="value" name="src" id="img_url" value={imgUrl} onChange={e => setImgUrl(e.target.value)} />
              </FormGroup>
            </Col>
          </Row>
          <Row className="mt-2 ml-2">
            <Col sm="4">
              <Button
                outline
                color="success"
                disabled={!movieName && !imgUrl}
                onClick={handleSubmit}
              >
                Add movie
              </Button>
            </Col>  
            <Col sm="4">
              <Button outline color="danger" onClick={toggle}>&nbsp;&nbsp;Cancel&nbsp;&nbsp;</Button>
            </Col>
            {
              movieName && (
                <Col sm="4">
                  <Button outline color="primary" onClick={getMovieData}>Get img url</Button>
                </Col>
              )
            }
          </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddMovie;