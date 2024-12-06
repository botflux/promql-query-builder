import {describe, it} from "mocha"
import {expect} from "chai";
import {range} from "./range";
import {timeseriesSelector} from "./selector";
import {Buildable} from "./buildable";

class GrafanaTemplateVariable implements Buildable {
    constructor(
      public readonly varName: string
    ) {
    }

    build(): string {
        return [ '${', this.varName, '}' ].join("")
    }
}

function grafanaTemplateVariable (varName: string) {
  return new GrafanaTemplateVariable(varName)
}

describe('range', () => {
  it('should be able to support grafana template variable as duration', () => {
    expect(range(timeseriesSelector("my_metric"), [ grafanaTemplateVariable("__interval") ]).build()).to.equal('my_metric[${__interval}]')
  })
})