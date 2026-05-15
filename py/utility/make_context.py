# GrassTouch SDK utility: make_context

from core.context import GrassTouchContext


def make_context_util(ctxmap, basectx):
    return GrassTouchContext(ctxmap, basectx)
