import {TimeseriesSelector} from "./selector";
import {Buildable} from "./buildable";

export class Range implements Buildable {
  constructor(
    public readonly series: TimeseriesSelector,
    public readonly range: Duration[]
  ) {
  }

  build(): string {
    const series = this.series.build()

    const range = this.range.map(r => r.build()).join(":")

    return `${series}[${range}]`
  }
}

export function range(timeseries: TimeseriesSelector, range: Duration[]): Range {
  return new Range(timeseries, range)
}

type DurationUnit = "ms" | "s" | "m" | "h"

class Duration implements Buildable {
  constructor(
    public readonly value: number,
    public readonly unit: DurationUnit
  ) {
  }

  build(): string {
    return `${this.value}${this.unit}`
  }
}

function hours(amount: number): Duration {
  return new Duration(amount, "h")
}

export function minutes(amount: number): Duration {
  return new Duration(amount, "m")
}

export function seconds(amount: number): Duration {
  return new Duration(amount, "s")
}

function miliseconds(amount: number): Duration {
  return new Duration(amount, "ms")
}