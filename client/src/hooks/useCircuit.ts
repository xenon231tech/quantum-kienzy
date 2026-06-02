import { useState, useCallback } from "react";

export interface Gate {
  type: string;
  target: number;
  control?: number;
}

export function useCircuit() {
  const [gates, setGates] = useState<Gate[]>([]);
  const [depth, setDepth] = useState(0);

  const addGate = useCallback((gate: Gate) => {
    setGates(prev => [...prev, gate]);
    setDepth(prev => Math.max(prev, gate.target + 1));
  }, []);

  const removeGate = useCallback((index: number) => {
    setGates(prev => prev.filter((_, i) => i !== index));
  }, []);

  const clearCircuit = useCallback(() => {
    setGates([]);
    setDepth(0);
  }, []);

  return { gates, depth, addGate, removeGate, clearCircuit };
}
