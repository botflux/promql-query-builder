import {Range} from "./range";
import {promScalar} from "./primitives";
import {Buildable} from "./buildable";

class RangeVectorFunction implements Buildable {
  constructor(
    public readonly functionName: string,
    public readonly args: Buildable[],
  ) {
  }

  build(): string {
    const builtArgs = this.args.map(arg => arg.build()).join(", ")

    return `${this.functionName}(${builtArgs})`
  }
}

export function changes(range: Range): RangeVectorFunction {
  return new RangeVectorFunction("changes", [range])
}

export function absentOverTime(range: Range): RangeVectorFunction {
  return new RangeVectorFunction("absent_over_time", [range])
}

export function delta(range: Range): RangeVectorFunction {
  return new RangeVectorFunction("delta", [range])
}

export function deriv(range: Range): RangeVectorFunction {
  return new RangeVectorFunction("deriv", [range])
}

export function holtWinters(range: Range, sf: number, tf: number): RangeVectorFunction {
  return new RangeVectorFunction("holt_winters", [range, promScalar(sf), promScalar(tf)])
}

export function idelta(range: Range): RangeVectorFunction {
  return new RangeVectorFunction("idelta", [range])
}

export function increase(range: Range): RangeVectorFunction {
  return new RangeVectorFunction("increase", [range])
}

export function irate(range: Range): RangeVectorFunction {
  return new RangeVectorFunction("irate", [range])
}

export function predictLinear(range: Range, seconds: number) {
  return new RangeVectorFunction("predict_linear", [range, promScalar(seconds)])
}

export function rate(range: Range) {
  return new RangeVectorFunction("rate", [range])
}

export function resets(range: Range) {
  return new RangeVectorFunction("resets", [range])
}

export function avgOverTime(range: Range) {
  return new RangeVectorFunction("avg_over_time", [range])
}

export function minOverTime(range: Range) {
  return new RangeVectorFunction("min_over_time", [range])
}

export function maxOverTime(range: Range) {
  return new RangeVectorFunction("max_over_time", [range])
}

export function sumOverTime(range: Range) {
  return new RangeVectorFunction("sum_over_time", [range])
}

export function countOverTime(range: Range) {
  return new RangeVectorFunction("count_over_time", [range])
}

export function quantileOverTime(quantile: number, range: Range) {
  return new RangeVectorFunction("quantile_over_time", [promScalar(quantile), range])
}

export function stddevOverTime(range: Range) {
  return new RangeVectorFunction("stddev_over_time", [range])
}

export function stdvarOverTime(range: Range) {
  return new RangeVectorFunction("stdvar_over_time", [range])
}