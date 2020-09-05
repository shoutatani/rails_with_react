class UserLoginController < ApplicationController
  def login
    return unless request.xhr?

    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render status: 200
    else
      render status: 401
    end
  end

  def logout
    session.delete(:user_id)
    render status: 200
  end

  def authenticated
    return unless request.xhr?

    status_code = if session[:user_id]
                    :ok
                  else
                    :unauthorized
                  end

    head status_code
  end
end
