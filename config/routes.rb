Rails.application.routes.draw do
  root "pages#index"
	
	namespace :api do
		namespace :v1 do
			resources :movies, param: :slug
			resources :reviews, only: [:create, :destroy ]
			resources :users, only: [:create ]
			post "login", to:"sessions#login"
			post "movie-data", to:"movies#movie_data"
			get "user-rack", to:"rack#show"
		end
	end
	
	get "*path", to:"pages#index", via: :all
end
