import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Brain, Coins, TrendingUp } from "lucide-react";

/**
 * Quantum Kienzy - Home Page
 * Cyberpunk Neon Aesthetic
 * Design: Dark navy background with neon cyan, magenta, and purple accents
 * Typography: Space Mono for headings, Inter for body text
 * Interactions: Energetic hover effects with glowing borders
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-magenta-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-background" />
            </div>
            <span className="text-xl font-bold neon-glow">QUANTUM KIENZY</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="bg-primary text-background hover:bg-cyan-500">
            Launch App
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663707302384/gtDhGhCHVdBZqjQcg62TEo/quantum-pattern-1-Jo5FJTumeh6HYxx5vrpWFi.webp')`,
            backgroundSize: "400px 400px",
          }}
        />

        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663707302384/gtDhGhCHVdBZqjQcg62TEo/quantum-hero-bg-UabM7onJbPLY6R5AynLLQ2.webp"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container relative z-10 max-w-4xl">
          <div className="space-y-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold neon-glow leading-tight">
              The Future of <span className="text-primary">Web3</span> & <span className="neon-glow-magenta">AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Quantum Kienzy combines cutting-edge cryptocurrency technology with artificial intelligence to revolutionize digital finance and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-primary text-background hover:bg-cyan-500 text-lg">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 border-t border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-glow">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Crypto */}
            <Card className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group cursor-pointer">
              <div className="p-8">
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-lg group-hover:from-cyan-500/30 group-hover:to-cyan-600/20 transition-all">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663707302384/gtDhGhCHVdBZqjQcg62TEo/quantum-crypto-icon-N67paXFWNfm3H2vYHf77gK.webp"
                    alt="Crypto"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">Crypto Trading</h3>
                <p className="text-muted-foreground">
                  Advanced cryptocurrency trading with real-time market data, AI-powered predictions, and secure transactions.
                </p>
              </div>
            </Card>

            {/* Feature 2: AI */}
            <Card className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-magenta-500/20 group cursor-pointer">
              <div className="p-8">
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-magenta-500/20 to-magenta-600/10 rounded-lg group-hover:from-magenta-500/30 group-hover:to-magenta-600/20 transition-all">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663707302384/gtDhGhCHVdBZqjQcg62TEo/quantum-ai-icon-dJhSx5thLcY2MuMq99VQGN.webp"
                    alt="AI"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-accent">AI Intelligence</h3>
                <p className="text-muted-foreground">
                  Machine learning algorithms that analyze market trends, optimize portfolios, and provide intelligent insights.
                </p>
              </div>
            </Card>

            {/* Feature 3: Web3 */}
            <Card className="bg-card border-border hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group cursor-pointer">
              <div className="p-8">
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-lg group-hover:from-purple-500/30 group-hover:to-purple-600/20 transition-all">
                  <Coins className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-purple-400">Web3 Integration</h3>
                <p className="text-muted-foreground">
                  Seamless blockchain integration, smart contracts, and decentralized finance solutions for modern traders.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-card/50 border-t border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary neon-glow">$2.5B+</p>
              <p className="text-muted-foreground">Trading Volume</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-accent neon-glow-magenta">500K+</p>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-purple-400">98.5%</p>
              <p className="text-muted-foreground">Uptime</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-cyan-400">24/7</p>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 neon-glow">About Quantum Kienzy</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Quantum Kienzy represents the convergence of three revolutionary technologies: quantum computing principles, blockchain innovation, and artificial intelligence. We're building the next generation of financial infrastructure for the decentralized world.
            </p>
            <p>
              Our platform leverages cutting-edge AI algorithms to provide real-time market analysis, predictive trading signals, and automated portfolio optimization. All transactions are secured through advanced blockchain technology, ensuring transparency and security.
            </p>
            <p>
              Whether you're a seasoned trader or just starting your crypto journey, Quantum Kienzy provides the tools, insights, and community you need to thrive in the Web3 ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-border bg-gradient-to-r from-cyan-500/5 to-magenta-500/5">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-glow">Ready to Transform Your Trading?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of traders using Quantum Kienzy to maximize their returns with AI-powered insights.
          </p>
          <Button size="lg" className="bg-primary text-background hover:bg-cyan-500 text-lg">
            Start Trading Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-primary mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-accent mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-purple-400 mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-cyan-400 mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
            <p>&copy; 2024 Quantum Kienzy. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">Discord</a>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
