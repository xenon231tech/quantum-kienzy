import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Circle, ArrowRight } from "lucide-react";

/**
 * Quantum Kienzy - Roadmap Page
 * Cyberpunk Neon Aesthetic
 * Design: Dark navy background with neon cyan, magenta accents
 */

export default function Roadmap() {
  const roadmapItems = [
    {
      quarter: "Q2 2024",
      status: "completed",
      features: [
        "Launch Quantum Kienzy Platform",
        "AI Trading Signals",
        "Real-time Market Data",
        "Basic Web3 Integration"
      ]
    },
    {
      quarter: "Q3 2024",
      status: "in-progress",
      features: [
        "Advanced Portfolio Analytics",
        "Multi-chain Support",
        "Smart Contract Automation",
        "Mobile App Beta"
      ]
    },
    {
      quarter: "Q4 2024",
      status: "upcoming",
      features: [
        "Predictive AI Models v2",
        "DeFi Yield Optimization",
        "Cross-chain Swaps",
        "Advanced Risk Management"
      ]
    },
    {
      quarter: "Q1 2025",
      status: "upcoming",
      features: [
        "Quantum Computing Integration",
        "Enterprise Solutions",
        "API v2 Release",
        "Institutional Features"
      ]
    }
  ];

  const integrations = [
    { name: "Binance", icon: "B", color: "from-yellow-400 to-orange-500" },
    { name: "Coinbase", icon: "C", color: "from-blue-400 to-cyan-500" },
    { name: "Kraken", icon: "K", color: "from-purple-400 to-pink-500" },
    { name: "Uniswap", icon: "U", color: "from-pink-400 to-red-500" },
    { name: "Aave", icon: "A", color: "from-cyan-400 to-blue-500" },
    { name: "Curve", icon: "C", color: "from-white to-gray-400" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold neon-glow">QUANTUM KIENZY</a>
          <div className="hidden md:flex gap-8">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
            <a href="/roadmap" className="text-primary">Roadmap</a>
          </div>
          <Button className="bg-primary text-background hover:bg-cyan-500">Launch App</Button>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-4 border-b border-border">
        <div className="container max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-glow">Product Roadmap</h1>
          <p className="text-xl text-muted-foreground">See what's coming to Quantum Kienzy and help shape the future</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {roadmapItems.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline line */}
                {idx !== roadmapItems.length - 1 && (
                  <div className="absolute left-6 top-16 w-1 h-24 bg-gradient-to-b from-primary to-accent opacity-50"></div>
                )}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 $
                      {item.status === 'completed' 
                        ? 'bg-primary border-primary' 
                        : item.status === 'in-progress'
                        ? 'bg-accent border-accent'
                        : 'bg-transparent border-muted'
                      }`}>
                      {item.status === 'completed' ? (
                        <CheckCircle className="w-6 h-6 text-background" />
                      ) : (
                        <Circle className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 bg-card border-border hover:border-primary transition-all duration-300 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{item.quarter}</h3>
                      <span className={`px-3 py-1 rounded text-sm font-bold $
                        {item.status === 'completed'
                          ? 'bg-primary text-background'
                          : item.status === 'in-progress'
                          ? 'bg-accent text-background'
                          : 'bg-muted text-muted-foreground'
                        }`}>
                        {item.status === 'completed' ? '✓ Completed' : item.status === 'in-progress' ? '◉ In Progress' : '○ Upcoming'}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex gap-3 items-center text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 border-t border-border bg-card/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-glow">Supported Integrations</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Connect with your favorite exchanges and DeFi protocols</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, idx) => (
              <Card
                key={idx}
                className="bg-card border-border hover:border-primary transition-all duration-300 p-6 flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${integration.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl font-bold text-white">{integration.icon}</span>
                </div>
                <p className="font-bold text-sm group-hover:text-primary transition-colors">{integration.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-glow">What's Next</h2>
          
          <div className="space-y-6">
            <Card className="bg-card border-border p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Quantum Computing Integration</h3>
              <p className="text-muted-foreground">Leverage quantum algorithms for ultra-fast market analysis and pattern recognition beyond classical computing limits.</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">Enterprise Solutions</h3>
              <p className="text-muted-foreground">Dedicated infrastructure, custom APIs, and white-label solutions for institutional traders and hedge funds.</p>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Advanced Risk Management</h3>
              <p className="text-muted-foreground">AI-powered risk assessment, portfolio hedging strategies, and real-time exposure monitoring.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/5 to-magenta-500/5 border-t border-border">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4 neon-glow">Ready to Join the Revolution?</h2>
          <p className="text-muted-foreground mb-6">Start trading with Quantum Kienzy today and stay ahead of the curve</p>
          <Button size="lg" className="bg-primary text-background hover:bg-cyan-500">
            Launch App <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-card/30">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2024 Quantum Kienzy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
