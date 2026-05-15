package voxgiggrasstouchsdk

import (
	"github.com/voxgig-sdk/grass-touch-sdk/core"
	"github.com/voxgig-sdk/grass-touch-sdk/entity"
	"github.com/voxgig-sdk/grass-touch-sdk/feature"
	_ "github.com/voxgig-sdk/grass-touch-sdk/utility"
)

// Type aliases preserve external API.
type GrassTouchSDK = core.GrassTouchSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GrassTouchEntity = core.GrassTouchEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GrassTouchError = core.GrassTouchError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetGrassTouchStatusEntityFunc = func(client *core.GrassTouchSDK, entopts map[string]any) core.GrassTouchEntity {
		return entity.NewGetGrassTouchStatusEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGrassTouchSDK = core.NewGrassTouchSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
