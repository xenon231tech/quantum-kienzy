import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-black/40 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ⚛️ Quantum Kienzy
          </h1>
          <p className="text-purple-300/80 mt-2">Advanced Quantum Computing Simulator</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Features */}
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 p-8">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">Features</h2>
            <ul className="space-y-3 text-purple-200">
              <li className="flex items-center gap-2">
                <span className="text-pink-400">✓</span> Quantum Circuit Simulator
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-400">✓</span> Qubit State Visualization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-400">✓</span> Quantum Gates (Hadamard, Pauli, CNOT)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-400">✓</span> Bloch Sphere Visualization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-400">✓</span> Probability Calculations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pink-400">✓</span> Algorithm Examples
              </li>
            </ul>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/30 p-6 text-center">
              <div className="text-3xl font-bold text-purple-300">256</div>
              <div className="text-purple-400 text-sm">Max Qubits</div>
            </Card>
            <Card className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-pink-500/30 p-6 text-center">
              <div className="text-3xl font-bold text-pink-300">∞</div>
              <div className="text-pink-400 text-sm">Simulations</div>
            </Card>
            <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/30 p-6 text-center">
              <div className="text-3xl font-bold text-blue-300">50+</div>
              <div className="text-blue-400 text-sm">Quantum Gates</div>
            </Card>
            <Card className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-indigo-500/30 p-6 text-center">
              <div className="text-3xl font-bold text-indigo-300">100%</div>
              <div className="text-indigo-400 text-sm">Open Source</div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg">
            Start Simulating →
          </Button>
          <p className="text-purple-300/60">No installation required. Run in your browser.</p>
        </div>
      </main>
    </div>
  );
}
