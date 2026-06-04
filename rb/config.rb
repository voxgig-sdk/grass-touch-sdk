# GrassTouch SDK configuration

module GrassTouchConfig
  def self.make_config
    {
      "main" => {
        "name" => "GrassTouch",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://is-kim-playing-steam.up.railway.app",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_grass_touch_status" => {},
        },
      },
      "entity" => {
        "get_grass_touch_status" => {
          "fields" => [
            {
              "name" => "last_seen",
              "req" => true,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "message",
              "req" => true,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "online",
              "req" => true,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 2,
            },
          ],
          "name" => "get_grass_touch_status",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "method" => "GET",
                  "orig" => "/",
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "parts" => [],
                  "args" => {},
                  "select" => {},
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    GrassTouchFeatures.make_feature(name)
  end
end
