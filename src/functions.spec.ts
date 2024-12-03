import {describe, it} from "mocha"
import {expect} from "chai";
import {time} from "./functions";

describe('time', function () {
  it('should be able to support "time"', () => {
    expect(time().build()).to.equal("time()")
  })
})