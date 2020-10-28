class CreateUserMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :user_movies do |t|
    	t.belongs_to :User
    	t.belongs_to :Movie
    end
  end
end
