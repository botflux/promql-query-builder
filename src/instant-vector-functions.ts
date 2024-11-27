import {Buildable} from "./buildable";
import {TimeseriesSelector} from "./selector";
import {promScalar} from "./primitives";

class InstantVectorFunction implements Buildable {
  constructor(
    public readonly functionName: string,
    public readonly args: Buildable[]
  ) {
  }

  build(): string {
    const args = this.args.map(arg => arg.build()).join(", ")
    return `${this.functionName}(${args})`
  }
}

export function abs(buildable: Buildable) {
  return new InstantVectorFunction("abs", [buildable])
}

export function absent(buildable: Buildable) {
  return new InstantVectorFunction("absent", [buildable])
}

export function ceil(buildable: Buildable) {
  return new InstantVectorFunction("ceil", [buildable])
}

export function clampMax(buildable: TimeseriesSelector, max: number) {
  return new InstantVectorFunction("clamp_max", [buildable, promScalar(max)])
}

export function clampMin(buildable: Buildable, min: number) {
  return new InstantVectorFunction("clamp_min", [buildable, promScalar(min)])
}

export function exp(buildable: Buildable) {
  return new InstantVectorFunction("exp", [buildable])
}

export function floor(buildable: Buildable) {
  return new InstantVectorFunction("floor", [buildable])
}

export function histogramQuantile(quantile: number, buildable: Buildable) {
  return new InstantVectorFunction("histogram_quantile", [promScalar(quantile), buildable])
}

export function ln(buildable: Buildable) {
  return new InstantVectorFunction("ln", [buildable])
}

export function log10(buildable: Buildable) {
  return new InstantVectorFunction("log10", [buildable])
}

export function log2(buildable: Buildable) {
  return new InstantVectorFunction("log2", [buildable])
}

export function round(buildable: Buildable, r: number) {
  return new InstantVectorFunction("round", [buildable, promScalar(r)])
}

export function scalar(buildable: Buildable) {
  return new InstantVectorFunction("scalar", [buildable])
}

export function sort(buildable: Buildable) {
  return new InstantVectorFunction("sort", [buildable])
}

export function sortDesc(buildable: Buildable) {
  return new InstantVectorFunction("sort_desc", [buildable])
}

export function sqrt(buildable: Buildable) {
  return new InstantVectorFunction("sqrt", [buildable])
}