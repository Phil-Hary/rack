module Api
	module V1
		class MoviesController < ApplicationController
			
			protect_from_forgery with: :null_session
			
			def index
				@movies = Movie.all
				render json: {movies: @movies.as_json(include: :reviews, methods: :average_score)}
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
			
			private
			
			def params_movie
				params.require('movie').permit(:movie_name, :img_url)
			end
			
		end
	end
end