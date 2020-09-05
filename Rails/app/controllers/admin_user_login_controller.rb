class AdminUserLoginController < ApplicationController
  def login
    return unless request.xhr?

    admin_user = AdminUser.find_by(email: params[:email])
    if admin_user&.authenticate(params[:password])
      session[:user_id] = admin_user.id
      head :ok
    else
      head :unauthorized
    end
  end

  def logout
    session.delete(:admin_user_id)
    head :ok
  end

  def authenticated
    return unless request.xhr?

    status_code = if session[:admin_user_id]
                    :ok
                  else
                    :unauthorized
                  end

    head status_code
  end
end
