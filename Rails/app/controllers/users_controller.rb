class UsersController < ApplicationController
  def preserve_create
    session
  end

  def create
    Rails.logger.info '*******create*******'
    Rails.logger.info "params=#{params}"
    head :ok
  end
end
