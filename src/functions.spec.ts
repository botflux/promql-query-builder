import {describe, it} from "mocha"
import {expect} from "chai";
import {acos, acosh, asin, asinh, atan, atanh, cos, cosh, deg, pi, rad, sin, sinh, tan, tanh, time} from "./functions";
import {timeseriesSelector} from "./selector";

describe('time', function () {
  it('should be able to support "time"', () => {
    expect(time().build()).to.equal("time()")
  })

  it('should be able to support "acos"', ()=> {
    expect(acos(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('acos(foo{bar="baz"})')
  })

  it('should be able to support "acosh"', ()=> {
    expect(acosh(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('acosh(foo{bar="baz"})')
  })

  it('should be able to support "asin"', ()=> {
    expect(asin(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('asin(foo{bar="baz"})')
  })

  it('should be able to support "asinh"', ()=> {
    expect(asinh(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('asinh(foo{bar="baz"})')
  })

  it('should be able to support "atan"', ()=> {
    expect(atan(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('atan(foo{bar="baz"})')
  })

  it('should be able to support "atanh"', ()=> {
    expect(atanh(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('atanh(foo{bar="baz"})')
  })

  it('should be able to support "cos"', ()=> {
    expect(cos(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('cos(foo{bar="baz"})')
  })

  it('should be able to support "cosh"', ()=> {
    expect(cosh(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('cosh(foo{bar="baz"})')
  })

  it('should be able to support "sin"', ()=> {
    expect(sin(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('sin(foo{bar="baz"})')
  })

  it('should be able to support "sinh"', ()=> {
    expect(sinh(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('sinh(foo{bar="baz"})')
  })

  it('should be able to support "tan"', ()=> {
    expect(tan(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('tan(foo{bar="baz"})')
  })

  it('should be able to support "tanh"', ()=> {
    expect(tanh(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('tanh(foo{bar="baz"})')
  })

  it('should be able to support "deg"', ()=> {
    expect(deg(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('deg(foo{bar="baz"})')
  })

  it('should be able to support "rad"', ()=> {
    expect(rad(timeseriesSelector("foo").withLabels({ bar: "baz" })).build()).to.equal('rad(foo{bar="baz"})')
  })

  it('should be able to support "pi"', ()=> {
    expect(pi().build()).to.equal('pi()')
  })
})