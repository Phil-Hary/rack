import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row  } from 'reactstrap';
import Stars from './star';
//import Tabs from './tabs';
import Rating from './Rating';
import Genre from './Genre';
import Tabs from './Tabs';
import TabContent from './TabContent';
import RackSvg from './Common/SVG/RackSvg';

const ReviewModal = ({ movie }) => {
  const [ currentTab, setCurrentTab ] = React.useState("overview");

  return (
    false ? (
      <div className="d-flex flex-column">
        <Row className="position-relative">
          <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop}`} className="d-none d-sm-block cover-image"/>
          <img src={movie.img_url} className="movie-poster"/>
          <p className="movie-name">{movie.movie_name}</p>
        </Row>
      </div>
    ) : (
      <div className="movie-detail" style={{
         backgroundImage: `linear-gradient(rgba(30, 27, 27, 0.83), rgb(3, 3, 3)), url(https://image.tmdb.org/t/p/w1280${movie.backdrop})`,
          /* Center and scale the image nicely */
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
      }}>
        <div className="d-flex flex-column-reverse flex-md-row">
          <div className="d-flex justify-content-center m-md-5 order-1 order-sm-0">
            <img src={movie.img_url} className="movie-poster" />
          </div>
          <div className="movie-data">
            <div className="mb-2 d-flex pt-2 pt-md-5">
              <div className="movie-name-detail">{movie.movie_name}</div>
              <div className="movie-year">[{movie.year}]</div>
            </div>
            <div className="d-flex">
              <RackSvg /> <div className="movie-rating">{movie.average_score}</div>
            </div>
            <div className="d-flex flex-row mb-0 mb-md-4">
              {
                movie.ratings.map(({Source, Value}, index) =><Rating type={Source} rating={Value} key={index}/>)
              }
            </div>
            <div className="genre">
              <Genre genre={movie.genre} />
            </div>
            <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <TabContent tab={currentTab} movie={movie} />
          </div>
        </div>
      </div>
    )
    
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