import {describe, it} from "mocha";
import {expect} from "chai";
import {timeseriesSelector} from "./selector";

describe('timeseriesSelector', function () {
  it("should be able to build query from metric name", () => {
    expect(timeseriesSelector("my_metric").build()).to.equal("my_metric")
  })

  it("should be able to build query from quoted metric name", () => {
    expect(timeseriesSelector("my_metric", true).build()).to.equal('{"my_metric"}')
  })

  it("should be able to build query with labels from quoted metric name", () => {
    expect(timeseriesSelector("my_metric", true).withLabels({ foo: "bar" }).build()).to.equal('{"my_metric",foo="bar"}')
  })

  describe("labels", () => {
    it("should be able to include labels", () => {
      expect(timeseriesSelector("my_metric").withLabels({ status_code: "200", http_method: "POST" }).build()).to.equal('my_metric{status_code="200",http_method="POST"}')
    })

    it("should be able to support =~", () => {
      expect(timeseriesSelector("my_metric").withLabel("status_code", "=~", "4[0-9]{2}").build()).to.equal('my_metric{status_code=~"4[0-9]{2}"}')
    })

    it("should be able to support !=", () => {
      expect(timeseriesSelector("my_metric").withLabel("status_code", "!=", "400").build()).to.equal('my_metric{status_code!="400"}')
    })

    it("should be able to support !~", () => {
      expect(timeseriesSelector("my_metric").withLabel("status_code", "!~", "4[0-9]{2}").build()).to.equal('my_metric{status_code!~"4[0-9]{2}"}')
    })

    it("should be able to combine .withLabels and .withLabel", () => {
      expect(timeseriesSelector("my_metric").withLabels({ http_method: "POST" }).withLabel("http_status", "=~", "5[0-9]{2}").build()).to.equal('my_metric{http_method="POST",http_status=~"5[0-9]{2}"}')
    })
  })
})

