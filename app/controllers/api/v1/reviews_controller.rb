module Api
	module V1
		class ReviewsController < ApplicationController
			
			def create
				@review = Review.new(params_review)
				if @review.save
					render json: { msg: "Review added successfully", review: @review }
				else
					render json: { error: @review.errors.messages } status: 422
				end
			end
			
			def destroy
				@review = Review.find(params[:id])
				if @review.destroy
					render json: { msg: "Review deleted successfully", review: @review }
				else
					render json: { error: @review.errors.messages } status: 422
				end
			end
			
			private
			
			def params_review
				params.require('review').permit(:title, :description);
			end
			
		end
	end
end