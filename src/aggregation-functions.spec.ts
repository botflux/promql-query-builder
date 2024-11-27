import {expect} from "chai";
import {timeseriesSelector} from "./selector";
import {
  avg,
  bottomk,
  count,
  countValues,
  group,
  max,
  min,
  quantile,
  stddev,
  stdvar,
  sum,
  topk
} from "./aggregation-functions";

describe("aggregation", () => {
  it("should be able to aggregate using 'sum'", () => {
    expect(sum(timeseriesSelector("my_metric").withLabels({ code: "200" })).build()).to.equal(`sum(my_metric{code="200"})`)
  })

  it("should be able to aggregate using 'sum' with the 'by' clause", () => {
    expect(sum(timeseriesSelector("my_metric").withLabels({ code: "200" })).by([ "instance", "namespace" ]).build()).to.equal('sum by (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggregate using 'sum' with the 'without' clause", () => {
    expect(sum(timeseriesSelector("my_metric").withLabels({ code: "200" })).without([ "instance", "namespace" ]).build()).to.equal('sum without (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggreagate using 'min'", () => {
    expect(min(timeseriesSelector("my_metric").withLabels({ code: "200" })).build()).to.equal(`min(my_metric{code="200"})`)
  })

  it("should be able to aggregate using 'min' with the 'by' clause", () => {
    expect(min(timeseriesSelector("my_metric").withLabels({ code: "200" })).by([ "instance", "namespace" ]).build()).to.equal('min by (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggregate using 'min' with the 'without' clause", () => {
    expect(min(timeseriesSelector("my_metric").withLabels({ code: "200" })).without([ "instance", "namespace" ]).build()).to.equal('min without (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggreagate using 'max'", () => {
    expect(max(timeseriesSelector("my_metric").withLabels({ code: "200" })).build()).to.equal(`max(my_metric{code="200"})`)
  })

  it("should be able to aggregate using 'max' with the 'by' clause", () => {
    expect(max(timeseriesSelector("my_metric").withLabels({ code: "200" })).by([ "instance", "namespace" ]).build()).to.equal('max by (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggregate using 'max' with the 'without' clause", () => {
    expect(max(timeseriesSelector("my_metric").withLabels({ code: "200" })).without([ "instance", "namespace" ]).build()).to.equal('max without (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggreagate using 'avg'", () => {
    expect(avg(timeseriesSelector("my_metric").withLabels({ code: "200" })).build()).to.equal(`avg(my_metric{code="200"})`)
  })

  it("should be able to aggregate using 'avg' with the 'by' clause", () => {
    expect(avg(timeseriesSelector("my_metric").withLabels({ code: "200" })).by([ "instance", "namespace" ]).build()).to.equal('avg by (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggregate using 'avg' with the 'without' clause", () => {
    expect(avg(timeseriesSelector("my_metric").withLabels({ code: "200" })).without([ "instance", "namespace" ]).build()).to.equal('avg without (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggreagate using 'group'", () => {
    expect(group(timeseriesSelector("my_metric").withLabels({ code: "200" })).build()).to.equal(`group(my_metric{code="200"})`)
  })

  it("should be able to aggregate using 'group' with the 'by' clause", () => {
    expect(group(timeseriesSelector("my_metric").withLabels({ code: "200" })).by([ "instance", "namespace" ]).build()).to.equal('group by (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggregate using 'group' with the 'without' clause", () => {
    expect(group(timeseriesSelector("my_metric").withLabels({ code: "200" })).without([ "instance", "namespace" ]).build()).to.equal('group without (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggreagate using 'stddev'", () => {
    expect(stddev(timeseriesSelector("my_metric").withLabels({ code: "200" })).build()).to.equal(`stddev(my_metric{code="200"})`)
  })

  it("should be able to aggregate using 'stddev' with the 'by' clause", () => {
    expect(stddev(timeseriesSelector("my_metric").withLabels({ code: "200" })).by([ "instance", "namespace" ]).build()).to.equal('stddev by (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggregate using 'stddev' with the 'without' clause", () => {
    expect(stddev(timeseriesSelector("my_metric").withLabels({ code: "200" })).without([ "instance", "namespace" ]).build()).to.equal('stddev without (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggreagate using 'stdvar'", () => {
    expect(stdvar(timeseriesSelector("my_metric").withLabels({ code: "200" })).build()).to.equal(`stdvar(my_metric{code="200"})`)
  })

  it("should be able to aggregate using 'stdvar' with the 'by' clause", () => {
    expect(stdvar(timeseriesSelector("my_metric").withLabels({ code: "200" })).by([ "instance", "namespace" ]).build()).to.equal('stdvar by (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggregate using 'stdvar' with the 'without' clause", () => {
    expect(stdvar(timeseriesSelector("my_metric").withLabels({ code: "200" })).without([ "instance", "namespace" ]).build()).to.equal('stdvar without (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggreagate using 'count'", () => {
    expect(count(timeseriesSelector("my_metric").withLabels({ code: "200" })).build()).to.equal(`count(my_metric{code="200"})`)
  })

  it("should be able to aggregate using 'count' with the 'by' clause", () => {
    expect(count(timeseriesSelector("my_metric").withLabels({ code: "200" })).by([ "instance", "namespace" ]).build()).to.equal('count by (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggregate using 'count' with the 'without' clause", () => {
    expect(count(timeseriesSelector("my_metric").withLabels({ code: "200" })).without([ "instance", "namespace" ]).build()).to.equal('count without (instance,namespace) (my_metric{code="200"})')
  })

  it("should be able to aggreagate using 'count_values'", () => {
    expect(countValues("field", timeseriesSelector("my_metric").withLabels({ code: "200" })).build()).to.equal(`count_values("field", my_metric{code="200"})`)
  })

  it("should be able to aggregate using 'count_values' with the 'by' clause", () => {
    expect(countValues("field", timeseriesSelector("my_metric").withLabels({ code: "200" })).by([ "instance", "namespace" ]).build()).to.equal('count_values by (instance,namespace) ("field", my_metric{code="200"})')
  })

  it("should be able to aggregate using 'count_values' with the 'without' clause", () => {
    expect(countValues("field", timeseriesSelector("my_metric").withLabels({ code: "200" })).without([ "instance", "namespace" ]).build()).to.equal('count_values without (instance,namespace) ("field", my_metric{code="200"})')
  })

  it("should be able to aggreagate using 'bottomk'", () => {
    expect(bottomk(5, timeseriesSelector("my_metric").withLabels({ code: "200" })).build()).to.equal(`bottomk(5, my_metric{code="200"})`)
  })

  it("should be able to aggregate using 'bottomk' with the 'by' clause", () => {
    expect(bottomk(5, timeseriesSelector("my_metric").withLabels({ code: "200" })).by([ "instance", "namespace" ]).build()).to.equal('bottomk by (instance,namespace) (5, my_metric{code="200"})')
  })

  it("should be able to aggregate using 'bottomk' with the 'without' clause", () => {
    expect(bottomk(5, timeseriesSelector("my_metric").withLabels({ code: "200" })).without([ "instance", "namespace" ]).build()).to.equal('bottomk without (instance,namespace) (5, my_metric{code="200"})')
  })

  it("should be able to aggreagate using 'topk'", () => {
    expect(topk(5, timeseriesSelector("my_metric").withLabels({ code: "200" })).build()).to.equal(`topk(5, my_metric{code="200"})`)
  })

  it("should be able to aggregate using 'topk' with the 'by' clause", () => {
    expect(topk(5, timeseriesSelector("my_metric").withLabels({ code: "200" })).by([ "instance", "namespace" ]).build()).to.equal('topk by (instance,namespace) (5, my_metric{code="200"})')
  })

  it("should be able to aggregate using 'topk' with the 'without' clause", () => {
    expect(topk(5, timeseriesSelector("my_metric").withLabels({ code: "200" })).without([ "instance", "namespace" ]).build()).to.equal('topk without (instance,namespace) (5, my_metric{code="200"})')
  })

  it("should be able to aggreagate using 'quantile'", () => {
    expect(quantile(.9, timeseriesSelector("my_metric").withLabels({ code: "200" })).build()).to.equal(`quantile(0.9, my_metric{code="200"})`)
  })

  it("should be able to aggregate using 'quantile' with the 'by' clause", () => {
    expect(quantile(.9, timeseriesSelector("my_metric").withLabels({ code: "200" })).by([ "instance", "namespace" ]).build()).to.equal('quantile by (instance,namespace) (0.9, my_metric{code="200"})')
  })

  it("should be able to aggregate using 'quantile' with the 'without' clause", () => {
    expect(quantile(.9, timeseriesSelector("my_metric").withLabels({ code: "200" })).without([ "instance", "namespace" ]).build()).to.equal('quantile without (instance,namespace) (0.9, my_metric{code="200"})')
  })
})