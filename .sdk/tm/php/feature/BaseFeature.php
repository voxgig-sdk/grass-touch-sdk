<?php
declare(strict_types=1);

// GrassTouch SDK base feature

class GrassTouchBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(GrassTouchContext $ctx, array $options): void {}
    public function PostConstruct(GrassTouchContext $ctx): void {}
    public function PostConstructEntity(GrassTouchContext $ctx): void {}
    public function SetData(GrassTouchContext $ctx): void {}
    public function GetData(GrassTouchContext $ctx): void {}
    public function GetMatch(GrassTouchContext $ctx): void {}
    public function SetMatch(GrassTouchContext $ctx): void {}
    public function PrePoint(GrassTouchContext $ctx): void {}
    public function PreSpec(GrassTouchContext $ctx): void {}
    public function PreRequest(GrassTouchContext $ctx): void {}
    public function PreResponse(GrassTouchContext $ctx): void {}
    public function PreResult(GrassTouchContext $ctx): void {}
    public function PreDone(GrassTouchContext $ctx): void {}
    public function PreUnexpected(GrassTouchContext $ctx): void {}
}
