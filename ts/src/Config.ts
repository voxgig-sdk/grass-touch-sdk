
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


  main = {
    name: 'GrassTouch',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "message",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "online",
          "req": true,
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

