module Api
	module V1
		class RackController < ApplicationController

			def show
				@movies = helpers.current_user.movies.paginate(:page => params[:page])
				render json: {
					movies: @movies.as_json(include: :reviews, methods: :average_score),
					page: @movies.current_page, pages: @movies.total_pages
				}
			end
		end
	end
end