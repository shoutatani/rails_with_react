require 'test_helper'

class AdminUserLoginControllerTest < ActionDispatch::IntegrationTest
  test 'should get login' do
    get admin_user_login_login_url
    assert_response :success
  end

  test 'should get logout' do
    get admin_user_login_logout_url
    assert_response :success
  end
end
