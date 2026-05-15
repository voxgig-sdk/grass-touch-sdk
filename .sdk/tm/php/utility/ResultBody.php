<?php
declare(strict_types=1);

// GrassTouch SDK utility: result_body

class GrassTouchResultBody
{
    public static function call(GrassTouchContext $ctx): ?GrassTouchResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
