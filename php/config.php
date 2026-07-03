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
              'active' => true,
              'name' => 'last_seen',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'message',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'online',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
          ],
          'name' => 'get_grass_touch_status',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/',
                  'parts' => [],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
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
