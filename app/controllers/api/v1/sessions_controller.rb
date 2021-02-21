module Api
	module V1
		class SessionsController < ApplicationController
			def login
				user = User.find_by(email: params[:session][:email].downcase)
				if user.authenticate(params[:session][:password])
					session[:user_id] = user.id
					puts helpers.current_user.email
					render json: {
						msg: "User validated",
						user: {
							name: user.name,
							email: user.email
						}
					}, status: 200
				else
					render json: {
						msg: "Invalid credentials"
					}, status: 203

				end
			end

			def logout
				session[:user_id] = nil
				render json: {
					message: "User loggerd out successfully"
				}
			end
		end
	end
end