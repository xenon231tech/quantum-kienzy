export function complexMultiply(a: any, b: any) {
  return {
    real: a.real * b.real - a.imag * b.imag,
    imag: a.real * b.imag + a.imag * b.real,
  };
}

export function complexAdd(a: any, b: any) {
  return {
    real: a.real + b.real,
    imag: a.imag + b.imag,
  };
}

export function complexMagnitude(c: any) {
  return Math.sqrt(c.real * c.real + c.imag * c.imag);
}

export function complexPhase(c: any) {
  return Math.atan2(c.imag, c.real);
}
