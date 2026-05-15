<?php
declare(strict_types=1);

// GrassTouch SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class GrassTouchFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new GrassTouchBaseFeature();
            case "test":
                return new GrassTouchTestFeature();
            default:
                return new GrassTouchBaseFeature();
        }
    }
}
