import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row  } from 'reactstrap';
import Stars from './star';
import Tabs from './tabs';

const ReviewModal = ({ movie }) => {
  console.log(movie);
  return (
    <div className="d-flex flex-column">
      <Row>
        <p className="d-md-flex movie-name m-4 justify-content-center">{movie.movie_name}</p>
      </Row>
      <Row className="d-flex d-md-flex-column">
        <Col sm={4} className="d-flex justify-content-center mt-4 img-col">
          <img src={movie.img_url}/>
        </Col>
        <Col sm={6}>
          <p>{movie.plot}</p>
         {/* <Tabs movie={movie} />*/}
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="d-flex justify-content-center">
          <i className="mr-4" style={{ fontSize: "30px"}}>Rack Rating</i>
          <Stars score={movie.average_score} big className="mt-4 rating-row"/>
        </Col>
        <Col sm={6}>
          
        </Col>
      </Row>
    </div>
  );
}

export default ReviewModal;