<?php
declare(strict_types=1);

// GrassTouch SDK configuration

class GrassTouchConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "GrassTouch",
                "slug" => "grass-touch",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://is-kim-playing-steam.up.railway.app",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_grass_touch_status" => [],
                ],
            ],
            "entity" => [
        'get_grass_touch_status' => [
          'fields' => [
            [
              'name' => 'lastSeen',
              'req' => true,
              'short' => 'Timestamp of the last known status update in ISO 8601 format',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'message',
              'req' => true,
              'short' => 'A message providing context or commentary about Kim\'s current outdoor activity status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'online',
              'req' => true,
              'short' => 'Indicates whether Kim is currently online or has touched grass (offline)',
              'type' => '`$BOOLEAN`',
            ],
          ],
          'name' => 'get_grass_touch_status',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'parts' => [],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return GrassTouchFeatures::make_feature($name);
    }
}
