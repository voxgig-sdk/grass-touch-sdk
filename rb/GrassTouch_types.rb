# frozen_string_literal: true

# Typed models for the GrassTouch SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetGrassTouchStatus entity data model.
#
# @!attribute [rw] last_seen
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] online
#   @return [Boolean]
GetGrassTouchStatus = Struct.new(
  :last_seen,
  :message,
  :online,
  keyword_init: true
)

# Request payload for GetGrassTouchStatus#load.
#
# @!attribute [rw] last_seen
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] online
#   @return [Boolean, nil]
GetGrassTouchStatusLoadMatch = Struct.new(
  :last_seen,
  :message,
  :online,
  keyword_init: true
)

