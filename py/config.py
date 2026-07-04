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
            "active": True,
            "name": "last_seen",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "message",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "online",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
        ],
        "name": "get_grass_touch_status",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/",
                "parts": [],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
