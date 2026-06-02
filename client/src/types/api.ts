export interface Algorithm {
  id: number;
  name: string;
  description: string;
  complexity?: string;
}

export interface GateInfo {
  name: string;
  symbol: string;
  description: string;
  matrix?: number[][];
}

export interface CircuitMetadata {
  name: string;
  description: string;
  qubits: number;
  depth: number;
  gates: number;
}
