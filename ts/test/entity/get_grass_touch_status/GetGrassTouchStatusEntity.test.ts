

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { GrassTouchSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetGrassTouchStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GRASS_TOUCH_TEST_LIVE=TRUE.
  afterEach(liveDelay('GRASS_TOUCH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GrassTouchSDK.test()
    const ent = testsdk.GetGrassTouchStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GRASS_TOUCH_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_grass_touch_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"lastSeen","req":true,"short":"Timestamp of the last known status update in ISO 8601 format","type":"`$STRING`","index$":0},{"active":true,"name":"message","req":true,"short":"A message providing context or commentary about Kim's current outdoor activity status","type":"`$STRING`","index$":1},{"active":true,"name":"online","req":true,"short":"Indicates whether Kim is currently online or has touched grass (offline)","type":"`$BOOLEAN`","index$":2}],"name":"get_grass_touch_status","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /","json":"{\"operationId\":\"getGrassTouchStatus\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"lastSeen\":\"2026-02-15T22:54:07.980Z\",\"message\":\"Even dictators need a break sometimes\",\"online\":true},\"schema\":{\"properties\":{\"lastSeen\":{\"description\":\"Timestamp of the last known status update in ISO 8601 format\",\"format\":\"date-time\",\"type\":\"string\"},\"message\":{\"description\":\"A message providing context or commentary about Kim's current outdoor activity status\",\"type\":\"string\"},\"online\":{\"description\":\"Indicates whether Kim is currently online or has touched grass (offline)\",\"type\":\"boolean\"}},\"required\":[\"online\",\"lastSeen\",\"message\"],\"type\":\"object\"}}},\"description\":\"Successful response with grass touch status information\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_grass_touch_status","name__orig":"get_grass_touch_status","Name":"GetGrassTouchStatus","name_":"get_grass_touch_status","name-":"get-grass-touch-status","NAME":"GET_GRASS_TOUCH_STATUS","index$":0}, {"active":true,"entity":"get_grass_touch_status","key$":"BasicGetGrassTouchStatusFlow","kind":"basic","name":"BasicGetGrassTouchStatusFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_grass_touch_status_ref01","srcdatavar":"get_grass_touch_status_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_grass_touch_status_ref01"}}],"index$":0}]}, 'GetGrassTouchStatus')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_grass_touch_status_ref01_data = Object.values(setup.data.existing.get_grass_touch_status)[0] as any

    // LOAD
    const get_grass_touch_status_ref01_ent = client.GetGrassTouchStatus()
    const get_grass_touch_status_ref01_match_dt0: any = {}
    const get_grass_touch_status_ref01_data_dt0 = (await get_grass_touch_status_ref01_ent.load(get_grass_touch_status_ref01_match_dt0)).data()
    assert(null != get_grass_touch_status_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_grass_touch_status/GetGrassTouchStatusTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = GrassTouchSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_grass_touch_status01','get_grass_touch_status02','get_grass_touch_status03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GRASS_TOUCH_TEST_GET_GRASS_TOUCH_STATUS_ENTID': idmap,
    'GRASS_TOUCH_TEST_LIVE': 'FALSE',
    'GRASS_TOUCH_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['GRASS_TOUCH_TEST_GET_GRASS_TOUCH_STATUS_ENTID']

  const live = 'TRUE' === env.GRASS_TOUCH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GRASS_TOUCH_TEST_GET_GRASS_TOUCH_STATUS_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new GrassTouchSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.GRASS_TOUCH_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
