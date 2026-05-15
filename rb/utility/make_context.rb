# GrassTouch SDK utility: make_context
require_relative '../core/context'
module GrassTouchUtilities
  MakeContext = ->(ctxmap, basectx) {
    GrassTouchContext.new(ctxmap, basectx)
  }
end
