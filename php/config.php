<?php
declare(strict_types=1);

// GrassTouch SDK configuration

class GrassTouchConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "GrassTouch",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://is-kim-playing-steam.up.railway.app",
                "auth" => [
                    "prefix" => "Bearer",
                ],
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
              'name' => 'last_seen',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'message',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'online',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 2,
            ],
          ],
          'name' => 'get_grass_touch_status',
          'op' => [
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'method' => 'GET',
                  'orig' => '/',
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'parts' => [],
                  'args' => [],
                  'select' => [],
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
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
