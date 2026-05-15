<?php
declare(strict_types=1);

// GrassTouch SDK utility: result_headers

class GrassTouchResultHeaders
{
    public static function call(GrassTouchContext $ctx): ?GrassTouchResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
