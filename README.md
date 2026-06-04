# GrassTouch SDK

Check whether Kim has touched grass lately — a whimsical Steam-vs-outdoors status feed

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Grass Touch API

The Grass Touch API is a tongue-in-cheek personal status endpoint hosted on Railway at [is-kim-playing-steam.up.railway.app](https://is-kim-playing-steam.up.railway.app). It answers a single question: has Kim touched grass, or are they on Steam?

What you get from the API:
- A status indicator for Kim's most recent known activity (indoor / outdoor).
- A single `GET /` root endpoint that returns the current snapshot.

Operational notes: the freepublicapis.com catalogue reports CORS disabled, an average response time around 1.3s, and a low historical reliability score, so expect occasional downtime. No authentication or rate-limit policy is documented.

## Try it

**TypeScript**
```bash
npm install grass-touch
```

**Python**
```bash
pip install grass-touch-sdk
```

**PHP**
```bash
composer require voxgig/grass-touch-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/grass-touch-sdk/go
```

**Ruby**
```bash
gem install grass-touch-sdk
```

**Lua**
```bash
luarocks install grass-touch-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { GrassTouchSDK } from 'grass-touch'

const client = new GrassTouchSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o grass-touch-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "grass-touch": {
      "command": "/abs/path/to/grass-touch-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **GetGrassTouchStatus** | The current grass-touch / Steam-playing status for Kim, exposed at the root path `GET /`. | `/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from grasstouch_sdk import GrassTouchSDK

client = GrassTouchSDK({})


# Load a specific getgrasstouchstatus
getgrasstouchstatus, err = client.GetGrassTouchStatus(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'grasstouch_sdk.php';

$client = new GrassTouchSDK([]);


// Load a specific getgrasstouchstatus
[$getgrasstouchstatus, $err] = $client->GetGrassTouchStatus(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/grass-touch-sdk/go"

client := sdk.NewGrassTouchSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "GrassTouch_sdk"

client = GrassTouchSDK.new({})


# Load a specific getgrasstouchstatus
getgrasstouchstatus, err = client.GetGrassTouchStatus(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("grass-touch_sdk")

local client = sdk.new({})


-- Load a specific getgrasstouchstatus
local getgrasstouchstatus, err = client:GetGrassTouchStatus(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = GrassTouchSDK.test()
const result = await client.GetGrassTouchStatus().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = GrassTouchSDK.test(None, None)
result, err = client.GetGrassTouchStatus(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = GrassTouchSDK::test(null, null);
[$result, $err] = $client->GetGrassTouchStatus(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetGrassTouchStatus(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = GrassTouchSDK.test(nil, nil)
result, err = client.GetGrassTouchStatus(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetGrassTouchStatus(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Grass Touch API

- Upstream: [https://is-kim-playing-steam.up.railway.app](https://is-kim-playing-steam.up.railway.app)
- API docs: [https://freepublicapis.com/grass-touch-api](https://freepublicapis.com/grass-touch-api)

- No licence is published on the API homepage or the freepublicapis.com catalogue entry.
- Treat the service as a casual, novelty endpoint; do not rely on it for production use.
- Attribution to the upstream service (`is-kim-playing-steam.up.railway.app`) is courteous if you redistribute the data.

---

Generated from the Grass Touch API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
