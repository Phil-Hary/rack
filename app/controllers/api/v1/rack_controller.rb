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

			def add_movie
				@movie_details = params.require('movieDetails').permit(:title, :year, :poster, :backDropPath, :popularity)

				request = HTTParty.get("https://www.omdbapi.com/?t=#{@movie_details[:title]}&plot=full&apikey=#{ENV['OMDB_API_KEY']}")

				imdb_id = request['imdbID']

				@userMovie = helpers.current_user.movies.find_by(imdb_id: imdb_id)

				if @userMovie 
					puts "Movie already exist in user rack"
					render json: {
						message: "Movie already exist in user rack"
					}
				
 
				else 
					#check if the movie already exist in the movies table
					@movie = Movie.find_by(imdb_id: imdb_id)

					if @movie 
						puts "Movie exist already ...establishing relation"
						@movie.user_ids = [helpers.current_user.id]
						render json: {
							message: "Movie added to user rack"
						}
					else

						@movie = Movie.new({
							movie_name: request['Title'],
							year: request['Year'],
							rated: request['Rated'],
							genre: request['Genre'],
							plot: request['Plot'],
							ratings: request['Ratings'],
							img_url: request['Poster'],
							released: request['Released'],
							runtime: request['Runtime'],
							director: request['Director'],
							actors: request['Actors'],
							writers: request['Writer'],
							lang: request['Language'],
							production: request['Production'],
							awards: request['Awards'],
							popularity: @movie_details[:popularity],
							backdrop: @movie_details[:backDropPath],
							imdb_id: imdb_id
						});

						if @movie.save
							@movie.user_ids = [helpers.current_user.id]
							render json: { msg: "Movie added successfully", movie: @movie }
						else
							render json: { error: @movie.errors.messages }, status: 422
						end
					end
				end
			end
		end
	end
end