# Typed models for the GrassTouch SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class GetGrassTouchStatus:
    last_seen: str
    message: str
    online: bool


@dataclass
class GetGrassTouchStatusLoadMatch:
    last_seen: Optional[str] = None
    message: Optional[str] = None
    online: Optional[bool] = None

