<?php
declare(strict_types=1);

// GrassTouch SDK utility: prepare_body

class GrassTouchPrepareBody
{
    public static function call(GrassTouchContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
