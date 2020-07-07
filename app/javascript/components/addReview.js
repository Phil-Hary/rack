import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import ReviewRating from './reviewRating';
import axios from 'axios';

const handleSubmit = (title, description, score, movie, history) => {

  axios
    .post("/api/v1/reviews",{
      review:{
        title,
        description,
        score,
        movie_id: movie.id,
      },
    })
    .then(res => {
      if(res.status == 200){
        window.location.reload(true);
      }
    })
    .catch(err => console.log(err))
}

const AddReview = (props) => {

    const [ title, setTitle ] = useState('');
    const [ description, setDescription]  = useState('');
    const [ score, setScore ] = useState(0);
    let history = useHistory();

    return(
        <Form className="mt-4" style={{color: "white"}}> 
          <Row>
            <Col sm="10">
              <FormGroup>
                <Label for="reviewTitle">Title</Label>
                <Input type="value" name="title" id="reviewTitle" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter review title" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="10">
              <FormGroup>
                <Label for="reviewDesc">Description</Label>
                <Input type="textarea" name="text" id="reviewDesc" value={description} onChange={e => setDescription(e.target.value)} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="reviewScore">Your Score</Label>
              </FormGroup>
              <ReviewRating score={setScore}/>
            </Col>
          </Row>
          <Row>
            <Col sm="8" className="d-flex justify-content-center offset-sm-2">
              <Button outline color="primary" block onClick={()=> handleSubmit(title, description, score, props.movie, history)}>Add Review</Button>
            </Col>
          </Row>
        </Form>
    );
}

export default AddReview;