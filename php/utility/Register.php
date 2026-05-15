<?php
declare(strict_types=1);

// GrassTouch SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

GrassTouchUtility::setRegistrar(function (GrassTouchUtility $u): void {
    $u->clean = [GrassTouchClean::class, 'call'];
    $u->done = [GrassTouchDone::class, 'call'];
    $u->make_error = [GrassTouchMakeError::class, 'call'];
    $u->feature_add = [GrassTouchFeatureAdd::class, 'call'];
    $u->feature_hook = [GrassTouchFeatureHook::class, 'call'];
    $u->feature_init = [GrassTouchFeatureInit::class, 'call'];
    $u->fetcher = [GrassTouchFetcher::class, 'call'];
    $u->make_fetch_def = [GrassTouchMakeFetchDef::class, 'call'];
    $u->make_context = [GrassTouchMakeContext::class, 'call'];
    $u->make_options = [GrassTouchMakeOptions::class, 'call'];
    $u->make_request = [GrassTouchMakeRequest::class, 'call'];
    $u->make_response = [GrassTouchMakeResponse::class, 'call'];
    $u->make_result = [GrassTouchMakeResult::class, 'call'];
    $u->make_point = [GrassTouchMakePoint::class, 'call'];
    $u->make_spec = [GrassTouchMakeSpec::class, 'call'];
    $u->make_url = [GrassTouchMakeUrl::class, 'call'];
    $u->param = [GrassTouchParam::class, 'call'];
    $u->prepare_auth = [GrassTouchPrepareAuth::class, 'call'];
    $u->prepare_body = [GrassTouchPrepareBody::class, 'call'];
    $u->prepare_headers = [GrassTouchPrepareHeaders::class, 'call'];
    $u->prepare_method = [GrassTouchPrepareMethod::class, 'call'];
    $u->prepare_params = [GrassTouchPrepareParams::class, 'call'];
    $u->prepare_path = [GrassTouchPreparePath::class, 'call'];
    $u->prepare_query = [GrassTouchPrepareQuery::class, 'call'];
    $u->result_basic = [GrassTouchResultBasic::class, 'call'];
    $u->result_body = [GrassTouchResultBody::class, 'call'];
    $u->result_headers = [GrassTouchResultHeaders::class, 'call'];
    $u->transform_request = [GrassTouchTransformRequest::class, 'call'];
    $u->transform_response = [GrassTouchTransformResponse::class, 'call'];
});
