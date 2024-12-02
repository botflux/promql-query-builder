import {Buildable} from "./buildable";

export class PrometheusFunction implements Buildable {
  constructor(
    private readonly functionName: string
  ) {
  }

  build(): string {
    return `${this.functionName}()`
  }
}

export function time() {
  return new PrometheusFunction("time")
}