# `promql-query-builder`

PromQL query builder to help creating dashboard as code using `@grafana/grafana-foundation-sdk`.
This package was inspired by [`satyanash/promql-jsonnet`](https://github.com/satyanash/promql-jsonnet), a PromQL
query builder for jsonnet.

## Installation

```bash
npm i promql-query-builder
```

## Example

PromQL expressions are expressed as classes all implementing the `Buildable` interface.
Class instances are created using the functions exposed by the package.
Call `.build()` to get the result of the expression.

Take a look at the tests to find more examples.

```typescript
import { timeseriesSelector, sum, clampMax, rate, range, duration } from "promql-query-builder"

// select series by name
// result is `http_request_count`
const requestCount = timeseriesSelector("http_request_count").build()

// select series by label
// result is `http_request_count{http_method="GET"}`
const getRequestCount = timeseriesSelector("http_request_count").withLabels({ http_method: "GET" }).build()

// aggregate series
// result is `sum by (service_name) (http_request_count{http_method="GET"})`
const getRequestCountByServiceName = sum(timeseriesSelector("http_request_count").withLabels({ http_method: "GET" })).by([ "service_name" ]).build()

// instant vectors 
// result is `ceil(http_request_count{http_method="GET"})`
const ceiled = ceil(timeseriesSelector("http_request_count").withLabels({ http_method: "GET" })).build()

// range vectors
// result is `rate(http_request_count[5m:30s])
const requestRate = rate(range(timeseriesSelector("http_request_count")), [ duration.minutes(5), duration.seconds(30) ]).build()
```

## Missing a function?

You can create missing function in case you find one.
Say, the `avg` function is not existing. Then, in the case
you can adapt the following example:

```typescript
import {prometheusFunction, Buildable} from "promql-query-builder"

function avg(selector: Buildable) {
  return prometheusFunction("avg", [ selector ])
}
```

> Do not hesitate to create a PR or open an issue so others do not 
> have to define functions themselves.

You can also create functions with multiple arguments.
Follow the next example to re-create the `histogram_quantile` function:

```typescript
import {prometheusFunction, Buildable, promScalar} from "promql-query-builder"

export function histogramQuantile (quantile: number, selector: Buildable) {
  return prometheusFunction("histogram_quantile", [
    promScalar(quantile),
    selector
  ])
}
```