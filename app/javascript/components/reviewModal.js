import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row  } from 'reactstrap';
import Stars from './star';
import Tabs from './tabs';

const ReviewModal = (props) => {

  return (
    <div>
      <Modal isOpen={true} id="review-modal">
        <ModalBody id="review-body">
          <Row>
            <Col sm={6} className="d-flex justify-content-center mt-4 img-col">
              <img src={props.movie.img_url}/>
            </Col>
            <Col sm={6}>
              <Tabs movie={props.movie} />
            </Col>
          </Row>
          <Row>
            <Col sm={6} className="d-flex justify-content-center">
              <i className="mr-4" style={{ fontSize: "30px"}}>Rack Rating</i>
              <Stars score={props.movie.average_score} big={true} className="mt-4 rating-row"/>
            </Col>
            <Col sm={6}>
              
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ReviewModal;