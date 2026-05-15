<?php
declare(strict_types=1);

// GrassTouch SDK utility: feature_add

class GrassTouchFeatureAdd
{
    public static function call(GrassTouchContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
