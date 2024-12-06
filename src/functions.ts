import {Buildable} from "./buildable";
import {promScalar} from "./primitives";

export class PrometheusFunction implements Buildable {
  constructor(
    private readonly functionName: string,
    private readonly args: Buildable[]
  ) {
  }

  build(): string {
    const built = this.args.map(arg => arg.build()).join(", ")

    return `${this.functionName}(${built})`
  }
}

/**
 * Create a prometheus function using the given function name
 * and arguments.
 *
 * You can use this function to build any missing function.
 *
 * @param functionName
 * @param args
 */
export function prometheusFunction (functionName: string, args: Buildable[]): Buildable {
  return new PrometheusFunction(functionName, args)
}

export function time() {
  return prometheusFunction("time", [])
}

export function vector(scalarOrBuildable: number | Buildable) {
  return prometheusFunction("vector", [ typeof scalarOrBuildable === "number" ? promScalar(scalarOrBuildable) : scalarOrBuildable ])
}
