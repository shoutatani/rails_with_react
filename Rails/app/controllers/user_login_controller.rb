class UserLoginController < ApplicationController
  def login
    return unless request.xhr?

    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      head :ok
    else
      head :unauthorized
    end
  end

  def logout
    return unless request.xhr?

    reset_session
    head :ok
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
