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
				render json: {movie: @movie.as_json(include: {reviews: {
					include: {user: { only: [:email, :name]}},
				}}, methods: :average_score)}
			end
			
			def create
				@movie = Movie.new(params_movie)
				puts @movie
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
				request = HTTParty.get("https://www.omdbapi.com/?t=#{movie_name[:movieName]}&plot=full&apikey=#{ENV['OMDB_API_KEY']}")
				request2 = HTTParty.get("https://api.themoviedb.org/3/find/#{request['imdbID']}?api_key=#{ENV['TMDB_API_KEY']}&language=en-US&external_source=imdb_id")	
				puts request
				puts request2
				render json: {
					year: request['Year'],
					rated: request['Rated'],
 					genre: request['Genre'],
 					plot: request['Plot'],
 					ratings: request['Ratings'],
					poster: request['Poster'],
					released: request['Released'],
					runtime: request['Runtime'],
					director: request['Director'],
					actors: request['Actors'],
					writers: request['Writer'],
					lang: request['Language'],
					production: request['Production'],
					awards: request['Awards'],
					popularity: request2['popularity'],
					backdrop: request2['movie_results'][0]['backdrop_path']
				}
			end
			
			private
			
			def params_movie
				params.require('movie').permit(:movie_name, :img_url, :year, :rated, :genre, :plot, :poster, :backdrop, :released, :runtime, :director, :actors, :writers, :lang, :production, :awards, :popularity, ratings: [:Source, :Value])
			end
			
		end
	end
end