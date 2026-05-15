package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetGrassTouchStatusEntityFunc func(client *GrassTouchSDK, entopts map[string]any) GrassTouchEntity

