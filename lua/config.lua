-- GrassTouch SDK configuration

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
            ["active"] = true,
            ["name"] = "last_seen",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "message",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "online",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 2,
          },
        },
        ["name"] = "get_grass_touch_status",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/",
                ["parts"] = {},
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
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
