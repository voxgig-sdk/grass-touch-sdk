# GrassTouch SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "GrassTouch",
            "slug": "grass-touch",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
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
            "name": "lastSeen",
            "req": True,
            "short": "Timestamp of the last known status update in ISO 8601 format",
            "type": "`$STRING`",
          },
          {
            "name": "message",
            "req": True,
            "short": "A message providing context or commentary about Kim's current outdoor activity status",
            "type": "`$STRING`",
          },
          {
            "name": "online",
            "req": True,
            "short": "Indicates whether Kim is currently online or has touched grass (offline)",
            "type": "`$BOOLEAN`",
          },
        ],
        "name": "get_grass_touch_status",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/",
                "parts": [],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
