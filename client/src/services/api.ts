export async function fetchQuantumAlgorithms() {
  return [
    { id: 1, name: "Deutsch Algorithm", description: "Determine if a function is balanced or constant" },
    { id: 2, name: "Grover Search", description: "Search unsorted database in O(√N)" },
    { id: 3, name: "Shor Algorithm", description: "Factor large integers efficiently" },
    { id: 4, name: "VQE", description: "Variational Quantum Eigensolver" },
  ];
}

export async function fetchGateLibrary() {
  return [
    { name: "Hadamard", symbol: "H", description: "Creates superposition" },
    { name: "Pauli-X", symbol: "X", description: "Bit flip" },
    { name: "Pauli-Y", symbol: "Y", description: "Bit and phase flip" },
    { name: "Pauli-Z", symbol: "Z", description: "Phase flip" },
    { name: "CNOT", symbol: "⊕", description: "Controlled NOT" },
  ];
}
