class Movie < ApplicationRecord
	has_many :reviews
	before_create :slugify
	
	def slugify
		self.slug = movie_name.parameterize
	end
	
	def average_score
		return 0 unless reviews.count.positive?
		reviews.average(:score).round(2).to_f
	end
end
