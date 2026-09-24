
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GrassTouchSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = GrassTouchSDK.test()
    equal(testsdk instanceof GrassTouchSDK, true,
      'GrassTouchSDK.test() must return a client synchronously')
  })

})
