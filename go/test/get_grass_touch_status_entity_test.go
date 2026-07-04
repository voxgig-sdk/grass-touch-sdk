package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/grass-touch-sdk/go"
	"github.com/voxgig-sdk/grass-touch-sdk/go/core"

	vs "github.com/voxgig-sdk/grass-touch-sdk/go/utility/struct"
)

func TestGetGrassTouchStatusEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GetGrassTouchStatus(nil)
		if ent == nil {
			t.Fatal("expected non-nil GetGrassTouchStatusEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := get_grass_touch_statusBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "get_grass_touch_status." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set GRASSTOUCH_TEST_GET_GRASS_TOUCH_STATUS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		getGrassTouchStatusRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.get_grass_touch_status", setup.data)))
		var getGrassTouchStatusRef01Data map[string]any
		if len(getGrassTouchStatusRef01DataRaw) > 0 {
			getGrassTouchStatusRef01Data = core.ToMapAny(getGrassTouchStatusRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = getGrassTouchStatusRef01Data

		// LOAD
		getGrassTouchStatusRef01Ent := client.GetGrassTouchStatus(nil)
		getGrassTouchStatusRef01MatchDt0 := map[string]any{}
		getGrassTouchStatusRef01DataDt0Loaded, err := getGrassTouchStatusRef01Ent.Load(getGrassTouchStatusRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if getGrassTouchStatusRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func get_grass_touch_statusBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "get_grass_touch_status", "GetGrassTouchStatusTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read get_grass_touch_status test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse get_grass_touch_status test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"get_grass_touch_status01", "get_grass_touch_status02", "get_grass_touch_status03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("GRASSTOUCH_TEST_GET_GRASS_TOUCH_STATUS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"GRASSTOUCH_TEST_GET_GRASS_TOUCH_STATUS_ENTID": idmap,
		"GRASSTOUCH_TEST_LIVE":      "FALSE",
		"GRASSTOUCH_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["GRASSTOUCH_TEST_GET_GRASS_TOUCH_STATUS_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["GRASSTOUCH_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewGrassTouchSDK(core.ToMapAny(mergedOpts))
	}

	live := env["GRASSTOUCH_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["GRASSTOUCH_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
