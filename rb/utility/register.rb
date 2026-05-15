# GrassTouch SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

GrassTouchUtility.registrar = ->(u) {
  u.clean = GrassTouchUtilities::Clean
  u.done = GrassTouchUtilities::Done
  u.make_error = GrassTouchUtilities::MakeError
  u.feature_add = GrassTouchUtilities::FeatureAdd
  u.feature_hook = GrassTouchUtilities::FeatureHook
  u.feature_init = GrassTouchUtilities::FeatureInit
  u.fetcher = GrassTouchUtilities::Fetcher
  u.make_fetch_def = GrassTouchUtilities::MakeFetchDef
  u.make_context = GrassTouchUtilities::MakeContext
  u.make_options = GrassTouchUtilities::MakeOptions
  u.make_request = GrassTouchUtilities::MakeRequest
  u.make_response = GrassTouchUtilities::MakeResponse
  u.make_result = GrassTouchUtilities::MakeResult
  u.make_point = GrassTouchUtilities::MakePoint
  u.make_spec = GrassTouchUtilities::MakeSpec
  u.make_url = GrassTouchUtilities::MakeUrl
  u.param = GrassTouchUtilities::Param
  u.prepare_auth = GrassTouchUtilities::PrepareAuth
  u.prepare_body = GrassTouchUtilities::PrepareBody
  u.prepare_headers = GrassTouchUtilities::PrepareHeaders
  u.prepare_method = GrassTouchUtilities::PrepareMethod
  u.prepare_params = GrassTouchUtilities::PrepareParams
  u.prepare_path = GrassTouchUtilities::PreparePath
  u.prepare_query = GrassTouchUtilities::PrepareQuery
  u.result_basic = GrassTouchUtilities::ResultBasic
  u.result_body = GrassTouchUtilities::ResultBody
  u.result_headers = GrassTouchUtilities::ResultHeaders
  u.transform_request = GrassTouchUtilities::TransformRequest
  u.transform_response = GrassTouchUtilities::TransformResponse
}
