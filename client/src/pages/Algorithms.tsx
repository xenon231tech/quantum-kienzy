import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Algorithms() {
  const algorithms = [
    { name: "Deutsch Algorithm", complexity: "O(1)", description: "Determine function type" },
    { name: "Grover Search", complexity: "O(√N)", description: "Quantum search" },
    { name: "Shor Algorithm", complexity: "O(log³N)", description: "Integer factorization" },
    { name: "VQE", complexity: "Hybrid", description: "Variational Quantum Eigensolver" },
    { name: "QAOA", complexity: "Hybrid", description: "Quantum Approximate Optimization" },
    { name: "HHL Algorithm", complexity: "O(log N)", description: "Linear systems solver" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-300 mb-8">Quantum Algorithms</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {algorithms.map((algo, i) => (
            <Card key={i} className="bg-black/40 border-purple-500/30 p-6 hover:border-purple-500/60 transition">
              <h3 className="text-xl font-bold text-purple-300 mb-2">{algo.name}</h3>
              <p className="text-purple-400 text-sm mb-4">{algo.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-pink-400 font-mono text-sm">{algo.complexity}</span>
                <Button className="bg-purple-600 hover:bg-purple-500 text-white text-sm">Learn</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
