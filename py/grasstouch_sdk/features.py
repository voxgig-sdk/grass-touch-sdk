# GrassTouch SDK feature factory

from grasstouch_sdk.feature.base_feature import GrassTouchBaseFeature
from grasstouch_sdk.feature.test_feature import GrassTouchTestFeature


def _make_feature(name):
    features = {
        "base": lambda: GrassTouchBaseFeature(),
        "test": lambda: GrassTouchTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
