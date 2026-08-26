
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'GrassTouch',
        slug: "grass-touch",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://is-kim-playing-steam.up.railway.app",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_grass_touch_status: {
      },

    }
  }


  entity = {
    "get_grass_touch_status": {
      "fields": [
        {
          "name": "lastSeen",
          "req": true,
          "short": "Timestamp of the last known status update in ISO 8601 format",
          "type": "`$STRING`"
        },
        {
          "name": "message",
          "req": true,
          "short": "A message providing context or commentary about Kim's current outdoor activity status",
          "type": "`$STRING`"
        },
        {
          "name": "online",
          "req": true,
          "short": "Indicates whether Kim is currently online or has touched grass (offline)",
          "type": "`$BOOLEAN`"
        }
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
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

