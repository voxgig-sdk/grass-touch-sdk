

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"lastSeen":{"a":true,"fo":"date-time","h":"Last Seen","n":"lastSeen","r":true,"sh":"Timestamp of the last known status update in ISO 8601 format","t":"`$STRING`","key$":"lastSeen","index$":0},"message":{"a":true,"h":"Message","n":"message","r":true,"sh":"A message providing context or commentary about Kim's current outdoor activity status","t":"`$STRING`","key$":"message","index$":1},"online":{"a":true,"h":"Online","n":"online","r":true,"sh":"Indicates whether Kim is currently online or has touched grass (offline)","t":"`$BOOLEAN`","key$":"online","index$":2}},"name":"get_grass_touch_status","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/","q":{},"r":{},"s":[],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_grass_touch_status","name__orig":"get_grass_touch_status","Name":"GetGrassTouchStatus","name_":"get_grass_touch_status","name-":"get-grass-touch-status","NAME":"GET_GRASS_TOUCH_STATUS","index$":0}, {"active":true,"entity":"get_grass_touch_status","key$":"BasicGetGrassTouchStatusFlow","kind":"basic","name":"BasicGetGrassTouchStatusFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"get_grass_touch_status_ref01","srcdatavar":"get_grass_touch_status_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_grass_touch_status_ref01"}}],"index$":0}]}, 'GetGrassTouchStatus', {"GET /":{"protocol":"http","parameters":[]}})
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
  
