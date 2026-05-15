-- GrassTouch SDK error

local GrassTouchError = {}
GrassTouchError.__index = GrassTouchError


function GrassTouchError.new(code, msg, ctx)
  local self = setmetatable({}, GrassTouchError)
  self.is_sdk_error = true
  self.sdk = "GrassTouch"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GrassTouchError:error()
  return self.msg
end


function GrassTouchError:__tostring()
  return self.msg
end


return GrassTouchError
