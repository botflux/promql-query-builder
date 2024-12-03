import {describe, it} from "mocha";
import {expect} from "chai";
import {
  abs,
  absent,
  ceil, clamp,
  clampMax,
  clampMin, dayOfMonth, dayOfWeek, dayOfYear, daysInMonth,
  exp,
  floor, histogramAvg, histogramCount,
  histogramQuantile,
  ln,
  log10, log2, round, scalar, sort, sortDesc, sqrt
} from "./instant-vector-functions";
import {timeseriesSelector} from "./selector";
import {time, vector} from "./functions";

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

  it("should be able to support 'clamp'", () => {
    expect(clamp(timeseriesSelector("my_metric").withLabels({ http_status: "200" }), 0, 10).build()).to.equal('clamp(my_metric{http_status="200"}, 0, 10)')
  })

  it('should be able to support "day_of_month"', () => {
    expect(dayOfMonth().build()).to.equal("day_of_month()")
  })

  it('should be able to support "day_of_month" with an arg', () => {
    expect(dayOfMonth(vector(time())).build()).to.equal("day_of_month(vector(time()))")
  })

  it('should be able to support "day_of_week"', () => {
    expect(dayOfWeek().build()).to.equal("day_of_week()")
  })

  it('should be able to support "day_of_week" with an arg', () => {
    expect(dayOfWeek(vector(time())).build()).to.equal("day_of_week(vector(time()))")
  })

  it('should be able to support "day_of_year"', () => {
    expect(dayOfYear().build()).to.equal("day_of_year()")
  })

  it('should be able to support "day_of_year"', () => {
    expect(dayOfYear(vector(time())).build()).to.equal("day_of_year(vector(time()))")
  })

  it('should be able to support "days_in_month"', () => {
    expect(daysInMonth().build()).to.equal("days_in_month()")
  })

  it('should be able to support "days_in_month" with an arg', () => {
    expect(daysInMonth(vector(time())).build()).to.equal("days_in_month(vector(time()))")
  })

  it('should be able to support "histogram_avg" with an arg', () => {
    expect(histogramAvg(
      timeseriesSelector("foo").withLabels({ bar: "bar"})
    ).build()).to.equal('histogram_avg(foo{bar="bar"})')
  })

  it('should be able to support "histogram_avg" with an arg', () => {
    expect(histogramCount(
      timeseriesSelector("foo").withLabels({ bar: "bar"})
    ).build()).to.equal('histogram_count(foo{bar="bar"})')
  })
})