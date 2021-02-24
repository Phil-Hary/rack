class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :movie_name
      t.string :img_url
      t.string :slug

      t.timestamps
    end
  end
end
