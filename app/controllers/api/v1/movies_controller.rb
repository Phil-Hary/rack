module Api
	module V1
		class MoviesController < ApplicationController
			include HTTParty

			protect_from_forgery with: :null_session
			
			def index
				@movies = Movie.paginate(:page => params[:page])
				render json: {
					movies: @movies.as_json(include: :reviews, methods: :average_score),
					page: @movies.current_page, pages: @movies.total_pages
				}
			end
			
			def show
				@movie = Movie.find_by(slug: params[:slug])
				render json: {movie: @movie.as_json(include: :reviews, methods: :average_score)}
			end
			
			def create
				@movie = Movie.new(params_movie)
				if @movie.save
					render json: { msg: "Movie added successfully", movie: @movie }
				else
					render json: { error: @movie.errors.messages }, status: 422
				end
			end
			
			def update
				@movie = Movie.find_by(slug: params[:slug])
				@movie.update(params_movie)
				
				if @movie.save
					render json: { msg: "Movie updated successfully", movie: @movie }
				else
					render json: { error: @movie.errors.messages }, status: 422
				end
			end
			
			def destroy
				@movie = Movie.find_by(slug: params[:slug])
				
				if @movie.destroy
					render json: { msg: "Movie deleted successfully", movie: @movie }
				else
					render json: { error: @movie.errors.messages }, status: 422
				end
			end

			def movie_data
				movie_name = params.require('search').permit(:movieName)
				request = HTTParty.get("https://www.omdbapi.com/?t=#{movie_name[:movieName]}&plot=full&&apikey=#{ENV['OMDB_API_KEY']}")
				puts request
				render json: {
					year: request['Year'],
					rated: request['Rated'],
 					genre: request['Genre'],
 					plot: request['Plot'],
 					ratings: request['Ratings'],
					poster: request['Poster'],
				}
			end
			
			private
			
			def params_movie
				params.require('movie').permit(:movie_name, :img_url, :year, :rated, :genre, :ratings, :plot, :poster)
			end
			
		end
	end
end