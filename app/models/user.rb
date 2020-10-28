class User < ApplicationRecord
	has_many :userMovies
	has_many :movies, through: :userMovies

	validates :name, presence: true,
					 length: { minimum: 3, maximum: 24}

	VALIDATE_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

	validates :email, presence: true,
					  format: { with: VALIDATE_EMAIL_REGEX }

	has_secure_password
end