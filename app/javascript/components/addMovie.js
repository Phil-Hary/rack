import React, { useState } from 'react';
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

const AddMovie = (props) => {
  const {
    buttonLabel,
    className,
    toggle,
    modal
  } = props;

  const [ movieName, setMovieName ] = useState('');
  const [ imgUrl, setImgUrl ] = useState('')

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody className="movie-create-body">
        <Form className="mt-4" style={{color: "white"}}> 
          <Row className="mt-4">
            <Col sm="12">
              <p>Movies</p>
            </Col>
          </Row>
          <Row>
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
          <Row>
            <Col sm="12">
              <Button outline color="success" onClick={() => handleSubmit(movieName, imgUrl)}>Add movie</Button>
            </Col>
          </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default AddMovie;