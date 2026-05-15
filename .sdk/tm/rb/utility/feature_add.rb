# GrassTouch SDK utility: feature_add
module GrassTouchUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
