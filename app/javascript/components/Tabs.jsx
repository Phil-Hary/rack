import React, { useContext } from 'react';
import { RackContext } from '../store';
import OverviewSvg from './Common/SVG/OverviewSvg';
import DetailsSvg from './Common/SVG/DetailsSvg';
import ReviewSvg from './Common/SVG/ReviewSvg';
import AddReviewSvg from './Common/SVG/AddReviewSvg';

const Tabs = ({ currentTab, setCurrentTab }) => {

  const { rackState, rackActions } = useContext(RackContext);
  const { isLoggedIn } = rackState;

  const checkIfUserIsLoggedIn = () => {
    isLoggedIn ? (
      setCurrentTab("addReview")
    ) : (
      rackActions.displayAlert("You must login in order to add reviews!!", "info")
    ) 
  }

	return(
		<div className="movie-tabs">
      <button type="button" className="btn btn-link shadow-none" onClick={() => setCurrentTab("overview")}>
        <OverviewSvg isActive={currentTab === "overview"} />
      </button>
      <button type="button" className="btn btn-link shadow-none" onClick={() => setCurrentTab("details")}>
        <DetailsSvg isActive={currentTab === "details"} />
      </button>
      <button type="button" className="btn btn-link shadow-none" onClick={() => setCurrentTab("reviews")}>
        <ReviewSvg isActive={currentTab === "reviews"} />
      </button>
      <button type="button" className="btn btn-link shadow-none" onClick={checkIfUserIsLoggedIn}>
        <AddReviewSvg isActive={currentTab === "addReview"} />
      </button>
    </div>
	)
}

export default Tabs;