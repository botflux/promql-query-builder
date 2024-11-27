import {describe, it} from "mocha";
import {expect} from "chai";
import {
  absentOverTime, avgOverTime,
  changes, countOverTime,
  delta,
  deriv,
  holtWinters,
  idelta,
  increase,
  irate, maxOverTime, minOverTime,
  predictLinear, quantileOverTime, rate, resets, stddevOverTime, stdvarOverTime, sumOverTime
} from "./range-vector-functions";
import {minutes, range, seconds} from "./range";
import {timeseriesSelector} from "./selector";

describe("range vectors functions", () => {
  it("should be able to support 'changes'", () => {
    expect(changes(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`changes(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'absent_over_time'", () => {
    expect(absentOverTime(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`absent_over_time(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'delta'", () => {
    expect(delta(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`delta(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'deriv'", () => {
    expect(deriv(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`deriv(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'holt_winters'", () => {
    expect(holtWinters(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ]), 0.5, 0.6).build()).to.equal(`holt_winters(my_metric{code="200"}[2m:30s], 0.5, 0.6)`)
  })

  it("should be able to support 'idelta'", () => {
    expect(idelta(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`idelta(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'increase'", () => {
    expect(increase(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`increase(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'irate'", () => {
    expect(irate(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`irate(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'predict_linear'", () => {
    expect(predictLinear(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ]), 60).build()).to.equal(`predict_linear(my_metric{code="200"}[2m:30s], 60)`)
  })

  it("should be able to support 'rate'", () => {
    expect(rate(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`rate(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'resets'", () => {
    expect(resets(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`resets(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'avg_over_time'", () => {
    expect(avgOverTime(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`avg_over_time(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'min_over_time'", () => {
    expect(minOverTime(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`min_over_time(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'max_over_time'", () => {
    expect(maxOverTime(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`max_over_time(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'sum_over_time'", () => {
    expect(sumOverTime(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`sum_over_time(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'count_over_time'", () => {
    expect(countOverTime(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`count_over_time(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'quantile_over_time'", () => {
    expect(quantileOverTime(0.8, range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`quantile_over_time(0.8, my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'stddev_over_time'", () => {
    expect(stddevOverTime(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`stddev_over_time(my_metric{code="200"}[2m:30s])`)
  })

  it("should be able to support 'stdvar_over_time'", () => {
    expect(stdvarOverTime(range(timeseriesSelector("my_metric").withLabels({ code: "200" }), [ minutes(2), seconds(30) ])).build()).to.equal(`stdvar_over_time(my_metric{code="200"}[2m:30s])`)
  })
})