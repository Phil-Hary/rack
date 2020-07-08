import React, { useState } from 'react';
import image from 'images/create_movie.jpg';
import { Button, Modal, Row, Col, ModalBody, Form , FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';

const handleSubmit = (movie_name, img_url) => {
  axios
    .post('/api/v1/movies',{
      movie: {
        movie_name,
        img_url,
      }
    })
    .then(res => {
      if(res.status == 200){
        window.location.reload(true);
      }
    })
    .catch(err => console.log(err))
}

const getImgUrl = (movieName) => {
  axios
    .get("https://www.omdbapi.com/?t=Godzilla&apikey=56c0d995")
    .then((data) => { console.log(data)})
    .catch(err => console.log(err))

}

const AddMovie = (props) => {
  const {
    toggle,
    modal
  } = props;

  const [ movieName, setMovieName ] = useState('');
  const [ imgUrl, setImgUrl ] = useState('')

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody className="movie-create-body">
        <Form style={{color: "white"}}> 
          <Row>
            <Col sm="12">
              <img src={image} width="100%" height="200px" class="refection"/>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col sm="12">
              <FormGroup>
                <Label for="movieName">Movie name</Label>
                <Input type="value" name="title" id="movieName" value={movieName} onChange={e => setMovieName(e.target.value)} placeholder="Enter review title" />
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
          <Row className="ml-4 mt-2">
            <Col sm="4">
              <Button outline color="success" onClick={() => handleSubmit(movieName, imgUrl)}>Add movie</Button>
            </Col>  
            <Col sm="4">
              <Button outline color="danger" onClick={toggle}>Cancel</Button>
            </Col>
            {
              (movieName)?
              (
                <Col sm="4">
                  <Button outline color="primary" onClick={getImgUrl(movieName)}>Get img url</Button>
                </Col>
              ):""
            }
          </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddMovie;