import {Buildable} from "./buildable";
import {promScalar} from "./primitives";

export class AggregationFunction implements Buildable {
  constructor(
    public readonly functionName: string,
    public readonly args: (Buildable | string)[],
    public readonly sumBy: string[],
    public readonly sumWithout: string[]
  ) {
  }

  by(labels: string[]): AggregationFunction {
    return new AggregationFunction(this.functionName, this.args, labels, [])
  }

  without(labels: string[]): AggregationFunction {
    return new AggregationFunction(this.functionName, this.args, [], labels)
  }

  build(): string {
    const byClause = this.sumBy.length === 0
      ? ""
      : ` by (${this.sumBy.join(",")}) `

    const withoutClause = this.sumWithout.length === 0
      ? ""
      : ` without (${this.sumWithout.join(",")}) `

    return `${this.functionName}${byClause}${withoutClause}(${this.args.map(strOrBuildable => typeof strOrBuildable === "string" ? `"${strOrBuildable}"` : strOrBuildable.build()).join(", ")})`
  }
}

export function sum(buildable: Buildable): AggregationFunction {
  return new AggregationFunction("sum", [buildable], [], [])
}

export function min(buildable: Buildable): AggregationFunction {
  return new AggregationFunction("min", [buildable], [], [])
}

export function max(buildable: Buildable): AggregationFunction {
  return new AggregationFunction("max", [buildable], [], [])
}

export function avg(buildable: Buildable): AggregationFunction {
  return new AggregationFunction("avg", [buildable], [], [])
}

export function group(buildable: Buildable): AggregationFunction {
  return new AggregationFunction("group", [buildable], [], [])
}

export function stddev(buildable: Buildable): AggregationFunction {
  return new AggregationFunction("stddev", [buildable], [], [])
}

export function stdvar(buildable: Buildable): AggregationFunction {
  return new AggregationFunction("stdvar", [buildable], [], [])
}

export function count(buildable: Buildable): AggregationFunction {
  return new AggregationFunction("count", [buildable], [], [])
}

export function countValues(label: string, buildable: Buildable): AggregationFunction {
  return new AggregationFunction("count_values", [label, buildable], [], [])
}

export function bottomk(count: number, buildable: Buildable): AggregationFunction {
  // `count` is wrapped in a `promNumber` to prevent `AggregationFunction.build` to wrap the number
  // with double quotes.
  return new AggregationFunction("bottomk", [promScalar(count), buildable], [], [])
}

export function topk(count: number, buildable: Buildable): AggregationFunction {
  return new AggregationFunction("topk", [promScalar(count), buildable], [], [])
}

export function quantile(quantile: number, buildable: Buildable): AggregationFunction {
  return new AggregationFunction("quantile", [promScalar(quantile), buildable], [], [])
}
