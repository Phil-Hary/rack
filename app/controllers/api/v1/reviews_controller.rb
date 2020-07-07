module Api
	module V1
		class ReviewsController < ApplicationController
			
			protect_from_forgery with: :null_session

			def create
				@review = Review.new(params_review)
				if @review.save
					render json: { msg: "Review added successfully", review: @review }
				else
					render json: { error: @review.errors.messages }, status: 422
				end
			end
			
			def destroy
				@review = Review.find(params[:id])
				if @review.destroy
					render json: { msg: "Review deleted successfully", review: @review }
				else
					render json: { error: @review.errors.messages }, status: 422
				end
			end
			
			private
			
			def params_review
				params.require('review').permit(:title, :description, :score, :movie_id);
			end
			
		end
	end
end