import {Buildable} from "./buildable";
import {promScalar} from "./primitives";

class ArithmeticExpression implements Buildable {
  constructor(
    public readonly terms: Buildable[],
    public readonly sign: string,
  ) {
  }

  build(): string {
    return this.terms.map(term => term.build()).join(` ${this.sign} `)
  }
}

function add(terms: (Buildable | number)[]) {
  const t: Buildable[] = terms.map(t => typeof t === "number" ? promScalar(t) : t)

  return new ArithmeticExpression(t, "+")
}

function subtract(terms: (Buildable | number)[]) {
  const t: Buildable[] = terms.map(t => typeof t === "number" ? promScalar(t) : t)

  return new ArithmeticExpression(t, "-")
}

function divide(terms: (Buildable | number)[]) {
  const t: Buildable[] = terms.map(t => typeof t === "number" ? promScalar(t) : t)
  return new ArithmeticExpression(t, "/")
}

function multiply(terms: (Buildable | number)[]) {
  const t: Buildable[] = terms.map(t => typeof t === "number" ? promScalar(t) : t)
  return new ArithmeticExpression(t, "*")
}

function modulo(terms: (Buildable | number)[]) {
  const t: Buildable[] = terms.map(t => typeof t === "number" ? promScalar(t) : t)
  return new ArithmeticExpression(t, "%")
}

function power(terms: (Buildable | number)[]) {
  const t: Buildable[] = terms.map(t => typeof t === "number" ? promScalar(t) : t)
  return new ArithmeticExpression(t, "^")
}

class Parenthesis implements Buildable {
  constructor(
    public readonly wrapped: Buildable
  ) {
  }

  build(): string {
    return `(${this.wrapped.build()})`
  }
}

function parenthesis(buildable: Buildable) {
  return new Parenthesis(buildable);
}

export const arithmetic = {
  add,
  subtract,
  divide,
  multiply,
  modulo,
  power,
  parenthesis
}