# ProjectName SDK exists test

import pytest
from grasstouch_sdk import GrassTouchSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GrassTouchSDK.test(None, None)
        assert testsdk is not None
