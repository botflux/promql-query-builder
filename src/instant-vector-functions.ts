import {Buildable} from "./buildable";
import {TimeseriesSelector} from "./selector";
import {promScalar} from "./primitives";
import {prometheusFunction} from "./functions";

export function abs(buildable: Buildable) {
  return prometheusFunction("abs", [buildable])
}

export function absent(buildable: Buildable) {
  return prometheusFunction("absent", [buildable])
}

export function ceil(buildable: Buildable) {
  return prometheusFunction("ceil", [buildable])
}

export function clampMax(buildable: TimeseriesSelector, max: number) {
  return prometheusFunction("clamp_max", [buildable, promScalar(max)])
}

export function clampMin(buildable: Buildable, min: number) {
  return prometheusFunction("clamp_min", [buildable, promScalar(min)])
}

export function clamp(buildable: Buildable, min: number, max: number) {
  return prometheusFunction("clamp", [ buildable, promScalar(min), promScalar(max) ])
}

export function exp(buildable: Buildable) {
  return prometheusFunction("exp", [buildable])
}

export function floor(buildable: Buildable) {
  return prometheusFunction("floor", [buildable])
}

export function histogramQuantile(quantile: number, buildable: Buildable) {
  return prometheusFunction("histogram_quantile", [promScalar(quantile), buildable])
}

export function ln(buildable: Buildable) {
  return prometheusFunction("ln", [buildable])
}

export function log10(buildable: Buildable) {
  return prometheusFunction("log10", [buildable])
}

export function log2(buildable: Buildable) {
  return prometheusFunction("log2", [buildable])
}

export function round(buildable: Buildable, r: number) {
  return prometheusFunction("round", [buildable, promScalar(r)])
}

export function scalar(buildable: Buildable) {
  return prometheusFunction("scalar", [buildable])
}

export function sort(buildable: Buildable) {
  return prometheusFunction("sort", [buildable])
}

export function sortDesc(buildable: Buildable) {
  return prometheusFunction("sort_desc", [buildable])
}

export function sqrt(buildable: Buildable) {
  return prometheusFunction("sqrt", [buildable])
}