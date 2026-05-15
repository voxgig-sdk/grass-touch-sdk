<?php
declare(strict_types=1);

// GrassTouch SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GrassTouchMakeContext
{
    public static function call(array $ctxmap, ?GrassTouchContext $basectx): GrassTouchContext
    {
        return new GrassTouchContext($ctxmap, $basectx);
    }
}
