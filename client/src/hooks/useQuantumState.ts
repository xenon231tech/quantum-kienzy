import { useState, useCallback } from "react";

export interface QuantumState {
  qubits: number;
  amplitudes: Complex[];
  measured: boolean;
}

export interface Complex {
  real: number;
  imag: number;
}

export function useQuantumState(initialQubits: number = 1) {
  const [state, setState] = useState<QuantumState>({
    qubits: initialQubits,
    amplitudes: Array(Math.pow(2, initialQubits)).fill({ real: 0, imag: 0 }),
    measured: false,
  });

  const initialize = useCallback((qubits: number) => {
    const size = Math.pow(2, qubits);
    const amplitudes = Array(size).fill({ real: 0, imag: 0 });
    amplitudes[0] = { real: 1, imag: 0 };
    
    setState({
      qubits,
      amplitudes,
      measured: false,
    });
  }, []);

  const applyGate = useCallback((gate: string, target: number) => {
    console.log(`Applying ${gate} to qubit ${target}`);
  }, []);

  const measure = useCallback(() => {
    setState(prev => ({ ...prev, measured: true }));
  }, []);

  return { state, initialize, applyGate, measure };
}
