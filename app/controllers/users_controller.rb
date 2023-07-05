require_dependency 'user'



class UsersController < ApplicationController
  def new
    # Render the signup form
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path, notice: 'Signup successful. You are now logged in.'
    else
      render :new
    end
  end

  def login_form
    # Render the login form
  end

  def login
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path, notice: 'Login successful.'
    else
      flash.now[:alert] = 'Invalid email or password.'
      render :login_form
    end
  end

  def logout
    session[:user_id] = nil
    redirect_to root_path, notice: 'Logged out successfully.'
  end

  # Other actions...

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
