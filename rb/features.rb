# GrassTouch SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module GrassTouchFeatures
  def self.make_feature(name)
    case name
    when "base"
      GrassTouchBaseFeature.new
    when "ratelimit"
      GrassTouchRatelimitFeature.new
    when "retry"
      GrassTouchRetryFeature.new
    when "test"
      GrassTouchTestFeature.new
    when "timeout"
      GrassTouchTimeoutFeature.new
    else
      GrassTouchBaseFeature.new
    end
  end
end
