import { describe, it, expect } from "vitest";
import { validateQubitCount, validateGateType } from "../utils/validation";

describe("Validation Utils", () => {
  it("should validate qubit count", () => {
    expect(validateQubitCount(5)).toBe(true);
    expect(validateQubitCount(0)).toBe(false);
    expect(validateQubitCount(300)).toBe(false);
  });

  it("should validate gate type", () => {
    expect(validateGateType("H")).toBe(true);
    expect(validateGateType("INVALID")).toBe(false);
  });
});
