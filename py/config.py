# GrassTouch SDK configuration


def make_config():
    return {
        "main": {
            "name": "GrassTouch",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://is-kim-playing-steam.up.railway.app",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_grass_touch_status": {},
            },
        },
        "entity": {
      "get_grass_touch_status": {
        "fields": [
          {
            "name": "last_seen",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "message",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "online",
            "req": True,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 2,
          },
        ],
        "name": "get_grass_touch_status",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "method": "GET",
                "orig": "/",
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "parts": [],
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
