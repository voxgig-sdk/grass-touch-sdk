
import { Context } from './Context'


class GrassTouchError extends Error {

  isGrassTouchError = true

  sdk = 'GrassTouch'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  GrassTouchError
}

