import { useState, useCallback } from "react";

export interface SimulationResult {
  counts: Record<string, number>;
  probabilities: Record<string, number>;
  executionTime: number;
}

export function useSimulation() {
  const [results, setResults] = useState<SimulationResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const runSimulation = useCallback(async (shots: number = 1000) => {
    setIsRunning(true);
    const startTime = performance.now();

    try {
      const counts: Record<string, number> = {};
      
      for (let i = 0; i < shots; i++) {
        const result = Math.random() > 0.5 ? "0" : "1";
        counts[result] = (counts[result] || 0) + 1;
      }

      const probabilities: Record<string, number> = {};
      Object.entries(counts).forEach(([state, count]) => {
        probabilities[state] = count / shots;
      });

      const executionTime = performance.now() - startTime;

      setResults({
        counts,
        probabilities,
        executionTime,
      });
    } finally {
      setIsRunning(false);
    }
  }, []);

  return { results, isRunning, runSimulation };
}
