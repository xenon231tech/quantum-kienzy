import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CircuitBuilder() {
  const [qubits, setQubits] = useState(3);
  const [gates, setGates] = useState<string[]>([]);

  const addGate = (gate: string) => {
    setGates([...gates, gate]);
  };

  const clearCircuit = () => {
    setGates([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-300 mb-8">Quantum Circuit Builder</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Circuit Display */}
          <div className="lg:col-span-2">
            <Card className="bg-black/40 border-purple-500/30 p-8">
              <h2 className="text-xl font-bold text-purple-300 mb-6">Circuit</h2>
              <div className="bg-slate-900 rounded p-6 mb-6 min-h-64">
                {gates.length === 0 ? (
                  <p className="text-purple-400/50 text-center py-20">Add gates to build your circuit</p>
                ) : (
                  <div className="space-y-2">
                    {gates.map((gate, i) => (
                      <div key={i} className="bg-purple-900/50 border border-purple-500/30 p-3 rounded text-purple-300">
                        {gate}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Button onClick={clearCircuit} variant="destructive" className="w-full">
                Clear Circuit
              </Button>
            </Card>
          </div>

          {/* Gate Palette */}
          <div>
            <Card className="bg-black/40 border-purple-500/30 p-6">
              <h2 className="text-xl font-bold text-purple-300 mb-6">Gates</h2>
              <div className="space-y-2">
                {["H (Hadamard)", "X (Pauli-X)", "Y (Pauli-Y)", "Z (Pauli-Z)", "S", "T", "CNOT", "SWAP"].map((gate) => (
                  <Button
                    key={gate}
                    onClick={() => addGate(gate)}
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white"
                  >
                    {gate}
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
