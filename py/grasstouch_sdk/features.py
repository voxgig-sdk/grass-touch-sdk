# GrassTouch SDK feature factory

from grasstouch_sdk.feature.base_feature import GrassTouchBaseFeature
from grasstouch_sdk.feature.ratelimit_feature import GrassTouchRatelimitFeature
from grasstouch_sdk.feature.retry_feature import GrassTouchRetryFeature
from grasstouch_sdk.feature.test_feature import GrassTouchTestFeature
from grasstouch_sdk.feature.timeout_feature import GrassTouchTimeoutFeature


_FEATURES = {
    "base": lambda: GrassTouchBaseFeature(),
    "ratelimit": lambda: GrassTouchRatelimitFeature(),
    "retry": lambda: GrassTouchRetryFeature(),
    "test": lambda: GrassTouchTestFeature(),
    "timeout": lambda: GrassTouchTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
