import {TimeseriesSelector} from "./selector";
import {Buildable} from "./buildable";

export class Range implements Buildable {
  constructor(
    public readonly series: TimeseriesSelector,
    public readonly range: (Duration | Buildable)[]
  ) {
  }

  build(): string {
    const series = this.series.build()

    const range = this.range.map(r => r.build()).join(":")

    return `${series}[${range}]`
  }
}

export function range(timeseries: TimeseriesSelector, range: (Duration | Buildable)[]): Range {
  return new Range(timeseries, range)
}

type DurationUnit = "ms" | "s" | "m" | "h" | "d" | "w"

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

function weeks(amount: number): Duration {
  return new Duration(amount, "w")
}

function days(amount: number): Duration {
  return new Duration(amount, "d")
}

function hours(amount: number): Duration {
  return new Duration(amount, "h")
}

function minutes(amount: number): Duration {
  return new Duration(amount, "m")
}

function seconds(amount: number): Duration {
  return new Duration(amount, "s")
}

function milliseconds(amount: number): Duration {
  return new Duration(amount, "ms")
}

export const duration = {
  weeks,
  days,
  hours,
  minutes,
  seconds,
  milliseconds
}