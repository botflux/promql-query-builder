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
    public readonly labels: Label[],
    public readonly quoted: boolean,
  ) {
  }

  withLabels(labels: Record<string, string>): TimeseriesSelector {
    const newLabels: Label[] = Object.entries(labels).map(([key, value]) => ({key, op: "=", value}))

    return new TimeseriesSelector(
      this.name,
      [...this.labels, ...newLabels],
      this.quoted
    )
  }

  withLabel(key: string, op: LabelSelector, value: string): TimeseriesSelector {
    return new TimeseriesSelector(
      this.name,
      [...this.labels, {key, op, value}],
      this.quoted
    )
  }

  build(): string {
    if (this.quoted) {
      const quotedMetricAndLabels = [
        `"${this.name}"`,
        ...this.buildLabels()
      ].join(",")

      return `{${quotedMetricAndLabels}}`
    }

    const labels = this.buildLabels()

    return labels.length === 0
      ? this.name
      : `${this.name}{${labels.join(',')}}`
  }

  private buildLabels(): string[] {
    if (this.labels.length === 0) {
      return []
    }

    return this.labels.map(({key, op, value}) => `${key}${op}"${value}"`)
  }
}

/**
 * The timeseries selector is the base to every query.
 *
 * @param name
 * @param quoted
 */
export function timeseriesSelector(name: string, quoted: boolean = false): TimeseriesSelector {
  return new TimeseriesSelector(name, [], quoted)
}