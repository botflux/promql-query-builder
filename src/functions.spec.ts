import {describe, it} from "mocha"
import {expect} from "chai";
import {dayOfMonth, dayOfWeek, time} from "./functions";

describe('time', function () {
  it('should be able to support "time"', () => {
    expect(time().build()).to.equal("time()")
  })

  it('should be able to support "day_of_month"', () => {
    expect(dayOfMonth().build()).to.equal("day_of_month()")
  })

  it('should be able to support "day_of_week"', () => {
    expect(dayOfWeek().build()).to.equal("day_of_week()")
  })
})