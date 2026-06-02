import { useState } from "react";
import { Card } from "@/components/ui/card";

export default function BlochSphere() {
  const [theta, setTheta] = useState(0);
  const [phi, setPhi] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-300 mb-8">Bloch Sphere Visualization</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-black/40 border-purple-500/30 p-8">
            <h2 className="text-xl font-bold text-purple-300 mb-6">Bloch Sphere</h2>
            <div className="bg-slate-900 rounded h-96 flex items-center justify-center">
              <div className="text-purple-400">3D Bloch Sphere Visualization</div>
            </div>
          </Card>

          <Card className="bg-black/40 border-purple-500/30 p-8">
            <h2 className="text-xl font-bold text-purple-300 mb-6">Parameters</h2>
            <div className="space-y-6">
              <div>
                <label className="text-purple-300 block mb-2">Theta (θ): {theta.toFixed(2)}</label>
                <input type="range" min="0" max="180" value={theta} onChange={(e) => setTheta(Number(e.target.value))} className="w-full" />
              </div>
              <div>
                <label className="text-purple-300 block mb-2">Phi (φ): {phi.toFixed(2)}</label>
                <input type="range" min="0" max="360" value={phi} onChange={(e) => setPhi(Number(e.target.value))} className="w-full" />
              </div>
              <div className="bg-slate-800 p-4 rounded">
                <p className="text-purple-400 text-sm">State: |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
