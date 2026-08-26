# GrassTouch SDK configuration

module GrassTouchConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "GrassTouch",
        "slug" => "grass-touch",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "name" => "lastSeen",
              "req" => true,
              "short" => "Timestamp of the last known status update in ISO 8601 format",
              "type" => "`$STRING`",
            },
            {
              "name" => "message",
              "req" => true,
              "short" => "A message providing context or commentary about Kim's current outdoor activity status",
              "type" => "`$STRING`",
            },
            {
              "name" => "online",
              "req" => true,
              "short" => "Indicates whether Kim is currently online or has touched grass (offline)",
              "type" => "`$BOOLEAN`",
            },
          ],
          "name" => "get_grass_touch_status",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/",
                  "parts" => [],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
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
