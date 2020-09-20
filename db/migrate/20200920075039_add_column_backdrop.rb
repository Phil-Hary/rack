class AddColumnBackdrop < ActiveRecord::Migration[6.0]
  def change
  	add_column :movies, :backdrop, :string
  end
end
