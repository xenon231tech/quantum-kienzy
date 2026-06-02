export interface Qubit {
  id: number;
  state: "0" | "1" | "superposition";
  amplitude: Complex;
}

export interface Complex {
  real: number;
  imag: number;
}

export interface QuantumGate {
  name: string;
  symbol: string;
  matrix: number[][];
  qubits: number;
}

export interface CircuitGate {
  type: string;
  target: number;
  control?: number;
  parameter?: number;
}

export interface SimulationResult {
  counts: Record<string, number>;
  probabilities: Record<string, number>;
  executionTime: number;
  shots: number;
}

export interface BlochSphereCoordinates {
  x: number;
  y: number;
  z: number;
}
