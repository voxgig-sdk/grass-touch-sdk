# GrassTouch SDK utility: prepare_body
require_relative 'media'
module GrassTouchUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return GrassTouchUtilities.raw_body(ctx.reqdata) if GrassTouchUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
