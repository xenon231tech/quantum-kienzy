import { describe, it, expect } from "vitest";
import { complexMultiply, complexAdd } from "../utils/quantum";

describe("Quantum Utils", () => {
  it("should multiply complex numbers", () => {
    const result = complexMultiply({ real: 1, imag: 2 }, { real: 3, imag: 4 });
    expect(result).toEqual({ real: -5, imag: 10 });
  });

  it("should add complex numbers", () => {
    const result = complexAdd({ real: 1, imag: 2 }, { real: 3, imag: 4 });
    expect(result).toEqual({ real: 4, imag: 6 });
  });
});
