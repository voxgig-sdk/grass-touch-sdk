# GrassTouch SDK exists test

require "minitest/autorun"
require_relative "../GrassTouch_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = GrassTouchSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
