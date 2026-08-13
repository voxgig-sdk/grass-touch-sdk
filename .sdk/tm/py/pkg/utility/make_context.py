# GrassTouch SDK utility: make_context

from projectname_sdk.core.context import GrassTouchContext


def make_context_util(ctxmap, basectx):
    return GrassTouchContext(ctxmap, basectx)
