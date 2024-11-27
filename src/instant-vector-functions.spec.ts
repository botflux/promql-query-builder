import {describe, it} from "mocha";
import {expect} from "chai";
import {
  abs,
  absent,
  ceil,
  clampMax,
  clampMin,
  exp,
  floor,
  histogramQuantile,
  ln,
  log10, log2, round, scalar, sort, sortDesc, sqrt
} from "./instant-vector-functions";
import {timeseriesSelector} from "./selector";

describe("instant vector functions", () => {
  it("should be able to support 'abs'", () => {
    expect(abs(timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('abs(my_metric{http_status="200"})')
  })

  it("should be able to support 'absent'", () => {
    expect(absent(timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('absent(my_metric{http_status="200"})')
  })

  it("should be able to support 'ceil'", () => {
    expect(ceil(timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('ceil(my_metric{http_status="200"})')
  })

  it("should be able to support 'clamp_max'", () => {
    expect(clampMax(timeseriesSelector("my_metric").withLabels({ http_status: "200" }), 1).build()).to.equal('clamp_max(my_metric{http_status="200"}, 1)')
  })

  it("should be able to support 'clamp_min'", () => {
    expect(clampMin(timeseriesSelector("my_metric").withLabels({ http_status: "200" }), 0).build()).to.equal('clamp_min(my_metric{http_status="200"}, 0)')
  })

  it("should be able to support 'exp'", () => {
    expect(exp(timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('exp(my_metric{http_status="200"})')
  })

  it("should be able to support 'floor'", () => {
    expect(floor(timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('floor(my_metric{http_status="200"})')
  })

  it("should be able to support 'histogram_quantile'", () => {
    expect(histogramQuantile(.9, timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('histogram_quantile(0.9, my_metric{http_status="200"})')
  })

  it("should be able to support 'ln'", () => {
    expect(ln(timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('ln(my_metric{http_status="200"})')
  })

  it("should be able to support 'log10'", () => {
    expect(log10(timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('log10(my_metric{http_status="200"})')
  })

  it("should be able to support 'log2'", () => {
    expect(log2(timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('log2(my_metric{http_status="200"})')
  })

  it("should be able to support 'round'", () => {
    expect(round(timeseriesSelector("my_metric").withLabels({ http_status: "200" }), 2).build()).to.equal('round(my_metric{http_status="200"}, 2)')
  })

  it("should be able to support 'scalar'", () => {
    expect(scalar(timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('scalar(my_metric{http_status="200"})')
  })

  it("should be able to support 'sort'", () => {
    expect(sort(timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('sort(my_metric{http_status="200"})')
  })

  it("should be able to support 'sort_desc'", () => {
    expect(sortDesc(timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('sort_desc(my_metric{http_status="200"})')
  })

  it("should be able to support 'sqrt'", () => {
    expect(sqrt(timeseriesSelector("my_metric").withLabels({ http_status: "200" })).build()).to.equal('sqrt(my_metric{http_status="200"})')
  })
})