require 'test_helper'

class Interieurs3ControllerTest < ActionController::TestCase
  test "should get new" do
    get :new
    assert_response :success
  end

end
