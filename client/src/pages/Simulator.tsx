import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Simulator() {
  const [results, setResults] = useState<Record<string, number>>({});

  const runSimulation = () => {
    // Simulate quantum measurement
    const newResults: Record<string, number> = {};
    for (let i = 0; i < 1000; i++) {
      const state = Math.random() > 0.5 ? "0" : "1";
      newResults[state] = (newResults[state] || 0) + 1;
    }
    setResults(newResults);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-300 mb-8">Quantum Simulator</h1>

        <Card className="bg-black/40 border-purple-500/30 p-8 mb-8">
          <h2 className="text-xl font-bold text-purple-300 mb-6">Simulation Results</h2>
          <Button onClick={runSimulation} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white mb-6">
            Run Simulation (1000 shots)
          </Button>

          {Object.keys(results).length > 0 && (
            <div className="space-y-4">
              {Object.entries(results).map(([state, count]) => (
                <div key={state}>
                  <div className="flex justify-between mb-2">
                    <span className="text-purple-300">|{state}⟩</span>
                    <span className="text-purple-400">{((count / 1000) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="bg-slate-800 rounded h-8 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-500"
                      style={{ width: `${(count / 1000) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
