export function validateQubitCount(count: number): boolean {
  return count > 0 && count <= 256;
}

export function validateGateType(gate: string): boolean {
  const validGates = ["H", "X", "Y", "Z", "S", "T", "CNOT", "SWAP", "Rx", "Ry", "Rz"];
  return validGates.includes(gate);
}

export function validateCircuit(gates: any[]): boolean {
  return Array.isArray(gates) && gates.length <= 10000;
}
