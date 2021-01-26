class DropUserMovies < ActiveRecord::Migration[6.0]
  def change
  	drop_table :user_movies
  end
end
