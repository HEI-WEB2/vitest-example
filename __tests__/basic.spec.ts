import {describe, it, expect} from "vitest";
import {sum} from "../src";

describe("sum", () => {
  it("should return the sum of the number array", () => {
    const result = sum([1, 2, 2]);
    expect(result).to.be.eq(5);
  })

  it("should output 0 on empty array", () => {
    const result = sum([]);
    expect(result).to.be.eq(0);
  })
})
