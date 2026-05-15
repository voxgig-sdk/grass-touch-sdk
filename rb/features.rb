# GrassTouch SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module GrassTouchFeatures
  def self.make_feature(name)
    case name
    when "base"
      GrassTouchBaseFeature.new
    when "test"
      GrassTouchTestFeature.new
    else
      GrassTouchBaseFeature.new
    end
  end
end
