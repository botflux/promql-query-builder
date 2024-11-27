import {Buildable} from "./buildable";

class Scalar implements Buildable {
  constructor(public readonly n: number) {
  }

  build(): string {
    return `${this.n}`
  }
}

export function promScalar(n: number): Scalar {
  return new Scalar(n)
}