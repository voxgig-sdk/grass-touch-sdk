-- GrassTouch SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "GrassTouch",
      slug = "grass-touch",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://is-kim-playing-steam.up.railway.app",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["get_grass_touch_status"] = {},
      },
    },
    entity = {
      ["get_grass_touch_status"] = {
        ["fields"] = {
          {
            ["format"] = "date-time",
            ["name"] = "lastSeen",
            ["req"] = true,
            ["short"] = "Timestamp of the last known status update in ISO 8601 format",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "message",
            ["req"] = true,
            ["short"] = "A message providing context or commentary about Kim's current outdoor activity status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "online",
            ["req"] = true,
            ["short"] = "Indicates whether Kim is currently online or has touched grass (offline)",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["name"] = "get_grass_touch_status",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/",
                ["segments"] = {},
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {},
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
