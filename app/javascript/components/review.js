import React , {Fragment} from 'react';
import icon from 'images/black_user.png';
import Stars from "./star";

const Reviews = (props) => {

  const { reviews } = props.movie;
  let reviewsList = [];

  const reviewsBuilder = (reviews) => {
    reviewsList.push(reviews.map((review) => {
      return(
        <div className="review-block mt-4">
          <img src={icon} height="30px" width="30px"/><b className="ml-2">username@example.com</b>
          <div className="review-title">{review.title}</div>
          <div className="review-score">
            <Stars score={review.score} big={false} className="mt-4 rating-row"/>
          </div>
          <i className="review-desc">{review.description}</i>
        </div>
      );
    }));
  }

  reviewsBuilder(reviews);

  return(
    <div>
    {
      (reviews)?(reviewsList):("")
    }
    </div>
  )
}

export default Reviews;