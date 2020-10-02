class MovieAddColumns < ActiveRecord::Migration[6.0]
  def change
  	add_column :movies, :released, :string
  	add_column :movies, :runtime, :string
  	add_column :movies, :director, :string
  	add_column :movies, :actors, :string
  	add_column :movies, :writers, :string
  	add_column :movies, :lang, :string
  	add_column :movies, :production, :string
  	add_column :movies, :awards, :string
  	add_column :movies, :popularity, :string
  end
end
