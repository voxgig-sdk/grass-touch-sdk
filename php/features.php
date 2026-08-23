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

    /**
     * Does a generated feature class back this name? False for a name only
     * an options extend instance can supply (the station adopt path) - the
     * constructor uses this to skip make_feature for such names instead of
     * adding a stray BaseFeature.
     */
    public static function has_feature(string $name): bool
    {
        switch ($name) {
            case "base":
            case "test":
                return true;
            default:
                return false;
        }
    }
}
