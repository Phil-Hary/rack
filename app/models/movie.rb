class Movie < ApplicationRecord
	has_many :userMovies
	has_many :users, through: :userMovies
	has_many :reviews
	before_create :slugify
	self.per_page = 24
	
	def slugify
		self.slug = movie_name.parameterize
	end
	
	def average_score
		return 0 unless reviews.count.positive?
		reviews.average(:score).round(2).to_f
	end
end
