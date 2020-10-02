import React from 'react';
import OverviewSvg from './Common/SVG/OverviewSvg';
import DetailsSvg from './Common/SVG/DetailsSvg';
import ReviewSvg from './Common/SVG/ReviewSvg';
import AddReviewSvg from './Common/SVG/AddReviewSvg';

const Tabs = ({ currentTab, setCurrentTab }) => {

	return(
		<div className="movie-tabs">
      <button type="button" class="btn btn-link shadow-none" onClick={() => setCurrentTab("overview")} onMouseEnter={() => console.log("Hi")}>
        <OverviewSvg isActive={currentTab === "overview"} />
      </button>
      <button type="button" class="btn btn-link shadow-none" onClick={() => setCurrentTab("details")}>
        <DetailsSvg isActive={currentTab === "details"} />
      </button>
      <button type="button" class="btn btn-link shadow-none" onClick={() => setCurrentTab("reviews")}>
        <ReviewSvg isActive={currentTab === "reviews"} />
      </button>
      <button type="button" class="btn btn-link shadow-none" onClick={() => setCurrentTab("addReview")}>
        <AddReviewSvg isActive={currentTab === "addReview"} />
      </button>
    </div>
	)
}

export default Tabs;