-- GrassTouch SDK exists test

local sdk = require("grass-touch_sdk")

describe("GrassTouchSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
