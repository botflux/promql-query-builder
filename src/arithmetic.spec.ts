import {describe, it} from "mocha"
import {expect} from "chai";
import {timeseriesSelector} from "./selector";
import {arithmetic} from "./arithmetic";

describe('arithmetic', () => {
  it('should be able to support "+"', () => {
    expect(arithmetic.add([timeseriesSelector("my_metric").withLabels({ foo: "bar" }), 2]).build()).to.equal('my_metric{foo="bar"} + 2')
  })

  it('should be able to support "-"', () => {
    expect(arithmetic.subtract([ timeseriesSelector("my_metric").withLabels({ http_status_code: "200" }), 4 ]).build()).to.equal('my_metric{http_status_code="200"} - 4')
  })

  it('should be able to support "/"', () => {
    expect(arithmetic.divide([ 1, timeseriesSelector("my_metric").withLabels({ method: "DELETE" }) ]).build()).to.equal('1 / my_metric{method="DELETE"}')
  })

  it('should be able to support "*"', function () {
    expect(arithmetic.multiply([ 6, timeseriesSelector("my_metric").withLabels({ method: "DELETE" }) ]).build()).to.equal('6 * my_metric{method="DELETE"}')
  })

  it('should be able to support "%"', function () {
    expect(arithmetic.modulo([ 6, timeseriesSelector("my_metric").withLabels({ method: "DELETE" }) ]).build()).to.equal('6 % my_metric{method="DELETE"}')
  })

  it('should be able to support "^"', function () {
    expect(arithmetic.power([ 2, timeseriesSelector("my_metric").withLabels({ method: "DELETE" }) ]).build()).to.equal('2 ^ my_metric{method="DELETE"}')
  })
})