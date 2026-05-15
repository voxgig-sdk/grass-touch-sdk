-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "GrassTouch",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://is-kim-playing-steam.up.railway.app",
      auth = {
        prefix = "Bearer",
      },
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
            ["name"] = "last_seen",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "message",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 1,
          },
          {
            ["name"] = "online",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["active"] = true,
            ["index$"] = 2,
          },
        },
        ["name"] = "get_grass_touch_status",
        ["op"] = {
          ["load"] = {
            ["name"] = "load",
            ["points"] = {
              {
                ["method"] = "GET",
                ["orig"] = "/",
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["parts"] = {},
                ["args"] = {},
                ["select"] = {},
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "load",
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
