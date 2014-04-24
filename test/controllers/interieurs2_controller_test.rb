require 'test_helper'

class Interieurs2ControllerTest < ActionController::TestCase
  test "should get new" do
    get :new
    assert_response :success
  end

end
