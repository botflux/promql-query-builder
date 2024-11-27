import {Buildable} from "./buildable";

type Label = {
  key: string
  op: LabelSelector
  value: string
}
type LabelSelector = "=~" | "=" | "!=" | "!~"

export class TimeseriesSelector implements Buildable {
  constructor(
    public readonly name: string,
    public readonly labels: Label[]
  ) {
  }

  withLabels(labels: Record<string, string>): TimeseriesSelector {
    const newLabels: Label[] = Object.entries(labels).map(([key, value]) => ({key, op: "=", value}))

    return new TimeseriesSelector(
      this.name,
      [...this.labels, ...newLabels]
    )
  }

  withLabel(key: string, op: LabelSelector, value: string): TimeseriesSelector {
    return new TimeseriesSelector(
      this.name,
      [...this.labels, {key, op, value}]
    )
  }

  build(): string {
    return `${this.name}${this.buildLabels()}`
  }

  private buildLabels(): string {
    if (this.labels.length === 0) {
      return ""
    }

    const built = this.labels.map(({key, op, value}) => `${key}${op}"${value}"`).join(",")

    return `{${built}}`
  }
}

/**
 * The timeseries selector is the base to every query.
 *
 * @param name
 * @see {}
 */
export function timeseriesSelector(name: string): TimeseriesSelector {
  return new TimeseriesSelector(name, [])
}