export const QUANTUM_GATES_LIST = [
  { name: "Hadamard", symbol: "H", category: "single-qubit" },
  { name: "Pauli-X", symbol: "X", category: "single-qubit" },
  { name: "Pauli-Y", symbol: "Y", category: "single-qubit" },
  { name: "Pauli-Z", symbol: "Z", category: "single-qubit" },
  { name: "S Gate", symbol: "S", category: "single-qubit" },
  { name: "T Gate", symbol: "T", category: "single-qubit" },
  { name: "CNOT", symbol: "⊕", category: "two-qubit" },
  { name: "SWAP", symbol: "⇄", category: "two-qubit" },
  { name: "Toffoli", symbol: "CCX", category: "three-qubit" },
];

export const MAX_QUBITS = 256;
export const MIN_QUBITS = 1;
export const DEFAULT_SHOTS = 1000;
export const MAX_CIRCUIT_DEPTH = 10000;

export const BLOCH_SPHERE_RADIUS = 100;
export const BLOCH_SPHERE_CENTER = { x: 0, y: 0, z: 0 };
