import { Card } from "@/components/ui/card";

export default function Documentation() {
  const docs = [
    { title: "Getting Started", path: "/docs/getting-started" },
    { title: "API Reference", path: "/docs/api" },
    { title: "Quantum Gates", path: "/docs/gates" },
    { title: "Circuit Building", path: "/docs/circuits" },
    { title: "Simulation", path: "/docs/simulation" },
    { title: "Examples", path: "/docs/examples" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-300 mb-8">Documentation</h1>
        
        <div className="space-y-4">
          {docs.map((doc, i) => (
            <Card key={i} className="bg-black/40 border-purple-500/30 p-6 hover:bg-purple-900/20 transition cursor-pointer">
              <h3 className="text-lg font-bold text-purple-300">{doc.title}</h3>
              <p className="text-purple-400 text-sm mt-2">{doc.path}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
