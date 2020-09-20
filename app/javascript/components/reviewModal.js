import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row  } from 'reactstrap';
import Stars from './star';
import Tabs from './tabs';

const ReviewModal = ({ movie }) => {
  console.log(movie);
  return (
    <div className="d-flex flex-column">
      <Row className="position-relative">
        <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop}`} className="d-none d-sm-block cover-image"/>
        <img src={movie.img_url} className="movie-poster"/>
        <p className="movie-name">{movie.movie_name}</p>
      </Row>
      
    </div>
  );
}

export default ReviewModal;

// <Row>
        
//       </Row>
//       <Row className="d-flex d-md-flex-column">
//         <Col sm={4} className="d-flex justify-content-center mt-4 img-col">
          
//         </Col>
//         <Col sm={6}>
//           <p>{movie.plot}</p>
//          {/* <Tabs movie={movie} />*/}
//         </Col>
//       </Row>
//       <Row>
//         <Col sm={6} className="d-flex justify-content-center">
//           <i className="mr-4" style={{ fontSize: "30px"}}>Rack Rating</i>
//           <Stars score={movie.average_score} big className="mt-4 rating-row"/>
//         </Col>
//         <Col sm={6}>
          
//         </Col>
//       </Row>