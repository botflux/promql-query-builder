import {Range} from "./range";
import {promScalar} from "./primitives";
import {Buildable} from "./buildable";
import {prometheusFunction} from "./functions";

export function changes(range: Range): Buildable {
  return prometheusFunction("changes", [range])
}

export function absentOverTime(range: Range): Buildable {
  return prometheusFunction("absent_over_time", [range])
}

export function delta(range: Range): Buildable {
  return prometheusFunction("delta", [range])
}

export function deriv(range: Range): Buildable {
  return prometheusFunction("deriv", [range])
}

export function holtWinters(range: Range, sf: number, tf: number): Buildable {
  return prometheusFunction("holt_winters", [range, promScalar(sf), promScalar(tf)])
}

export function idelta(range: Range): Buildable {
  return prometheusFunction("idelta", [range])
}

export function increase(range: Range): Buildable {
  return prometheusFunction("increase", [range])
}

export function irate(range: Range): Buildable {
  return prometheusFunction("irate", [range])
}

export function predictLinear(range: Range, seconds: number): Buildable {
  return prometheusFunction("predict_linear", [range, promScalar(seconds)])
}

export function rate(range: Range): Buildable {
  return prometheusFunction("rate", [range])
}

export function resets(range: Range): Buildable {
  return prometheusFunction("resets", [range])
}

export function avgOverTime(range: Range): Buildable {
  return prometheusFunction("avg_over_time", [range])
}

export function minOverTime(range: Range): Buildable {
  return prometheusFunction("min_over_time", [range])
}

export function maxOverTime(range: Range): Buildable {
  return prometheusFunction("max_over_time", [range])
}

export function sumOverTime(range: Range): Buildable {
  return prometheusFunction("sum_over_time", [range])
}

export function countOverTime(range: Range): Buildable {
  return prometheusFunction("count_over_time", [range])
}

export function quantileOverTime(quantile: number, range: Range): Buildable {
  return prometheusFunction("quantile_over_time", [promScalar(quantile), range])
}

export function stddevOverTime(range: Range): Buildable {
  return prometheusFunction("stddev_over_time", [range])
}

export function stdvarOverTime(range: Range): Buildable {
  return prometheusFunction("stdvar_over_time", [range])
}

export function doubleExponentialSmoothing(range: Range, sf: number, tf: number): Buildable {
  return prometheusFunction("double_exponential_smoothing", [range, promScalar(sf), promScalar(tf)])
}