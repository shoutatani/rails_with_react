class UsersController < ApplicationController
  def create
    head :ok
  end

  def admin_privilege
    return unless request.xhr?

    user_id = session[:user_id]
    return head :forbidden if user_id.blank?

    status_code = if AdminUser.find(user_id).present?
                    :ok
                  else
                    :not_found
                  end

    head status_code
  end
end
