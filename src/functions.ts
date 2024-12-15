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

export function acos (buildable: Buildable): Buildable {
  return prometheusFunction("acos", [ buildable ])
}

export function acosh (buildable: Buildable): Buildable {
  return prometheusFunction("acosh", [ buildable ])
}

export function asin (buildable: Buildable): Buildable {
  return prometheusFunction("asin", [ buildable ])
}

export function asinh (buildable: Buildable): Buildable {
  return prometheusFunction("asinh", [ buildable ])
}

export function atan (buildable: Buildable): Buildable {
  return prometheusFunction("atan", [ buildable ])
}

export function atanh (buildable: Buildable): Buildable {
  return prometheusFunction("atanh", [ buildable ])
}

export function cos (buildable: Buildable): Buildable {
  return prometheusFunction("cos", [ buildable ])
}

export function cosh (buildable: Buildable): Buildable {
  return prometheusFunction("cosh", [ buildable ])
}

export function sin (buildable: Buildable): Buildable {
  return prometheusFunction("sin", [ buildable ])
}

export function sinh (buildable: Buildable): Buildable {
  return prometheusFunction("sinh", [ buildable ])
}

export function tan (buildable: Buildable): Buildable {
  return prometheusFunction("tan", [ buildable ])
}

export function tanh (buildable: Buildable): Buildable {
  return prometheusFunction("tanh", [ buildable ])
}

export function deg (buildable: Buildable): Buildable {
  return prometheusFunction("deg", [ buildable ])
}

export function rad (buildable: Buildable): Buildable {
  return prometheusFunction("rad", [ buildable ])
}

export function pi (): Buildable {
  return prometheusFunction("pi", [])
}
