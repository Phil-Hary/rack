module Api
	module V1
		class UsersController < ApplicationController
			protect_from_forgery with: :null_session

			def create
				@user = User.create(filter_params)
				if @user.save
					puts "User added successfully"
					session[:user_id] = @user.id
					render json: { msg: "User added successfully", user: @user }, status: 200
				else
					puts "Cannot signup user"
					render json: { msg: "Cannot create user" }, status: 422
				end
			end

			private

			def filter_params
				params.require(:user).permit(:name, :email, :password)
			end	
		end
	end
end