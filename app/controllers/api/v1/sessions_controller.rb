module Api
	module V1
		class SessionsController < ApplicationController
			def login
				user = User.find_by(email: params[:session][:email].downcase)
				if user.authenticate(params[:session][:password])
					session[:user_id] = user.id
					render json: {
						msg: "User validated"
					}, status: 200
				else
					render json: {
						msg: "Invalid user"
					}, status: 203

				end
			end
		end
	end
end