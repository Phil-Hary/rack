class MoviesAddColumns < ActiveRecord::Migration[6.0]
  def change
  	add_column :movies, :year, :string
  	add_column :movies, :rated, :string
  	add_column :movies, :genre, :string
  	add_column :movies, :plot, :string
  	add_column :movies, :ratings, :json, default: [], array: true
  end
end
