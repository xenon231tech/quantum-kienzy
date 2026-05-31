import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Brain, Coins, TrendingUp, Check, Star, BarChart3, Cpu, Layers, Zap as ZapIcon, TrendingDown } from "lucide-react";
import { useCryptoPrices } from "@/hooks/useCryptoPrices";

/**
 * Quantum Kienzy - Home Page
 * Cyberpunk Neon Aesthetic
 * Design: Dark navy background with neon cyan, magenta, and purple accents
 * Typography: Space Mono for headings, Inter for body text
 * Interactions: Energetic hover effects with glowing borders
 */

export default function Home() {
  const { prices, loading } = useCryptoPrices();

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
          <a href="/dashboard">
            <Button className="bg-primary text-background hover:bg-cyan-500">
              Launch App
            </Button>
          </a>
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
              <a href="/dashboard">
                <Button size="lg" className="bg-primary text-background hover:bg-cyan-500 text-lg">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="/roadmap">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Learn More
                </Button>
              </a>
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

      {/* Dashboard Preview Section */}
      <section className="py-20 px-4 border-t border-border bg-card/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-glow">Dashboard Preview</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Experience the power of real-time trading analytics and AI-driven insights</p>
          
          <div className="bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 rounded-lg border border-border p-8 overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {prices.map((crypto, idx) => {
                  const isPositive = crypto.change24h >= 0;
                  const colors = ["text-primary", "text-accent", "text-purple-400"];
                  const gradients = ["from-cyan-500/20", "from-magenta-500/20", "from-purple-500/20"];
                  
                  return (
                    <div key={crypto.id} className="space-y-4">
                      <div className="flex items-center gap-2">
                        <img src={crypto.image} alt={crypto.symbol} className="w-6 h-6 rounded-full" />
                        <div>
                          <div className="text-sm font-bold text-foreground">{crypto.symbol}</div>
                          <div className="text-xs text-muted-foreground">{crypto.name}</div>
                        </div>
                      </div>
                      <div className={`text-4xl font-bold ${colors[idx]}`}>${crypto.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                      <div className={`text-sm flex items-center gap-1 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {isPositive ? '↑' : '↓'} {Math.abs(crypto.change24h).toFixed(2)}% (24h)
                      </div>
                      <div className={`h-12 bg-gradient-to-r ${gradients[idx]} to-transparent rounded animate-pulse`}></div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-glow">What Traders Say</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Join thousands of successful traders using Quantum Kienzy</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Crypto Trader",
                text: "Quantum Kienzy's AI predictions helped me increase my ROI by 45% in just 3 months. The real-time analytics are game-changing.",
                roi: "+45%"
              },
              {
                name: "Sarah Williams",
                role: "Portfolio Manager",
                text: "The Web3 integration is seamless. I can manage multiple wallets and execute trades across different chains effortlessly.",
                roi: "+62%"
              },
              {
                name: "Marcus Johnson",
                role: "Day Trader",
                text: "The AI signals are incredibly accurate. I've been using it for 6 months and haven't looked back. Best investment ever.",
                roi: "+78%"
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary transition-all duration-300 p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-400">{testimonial.roi}</p>
                    <p className="text-xs text-muted-foreground">ROI</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 border-t border-border bg-card/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-glow">Simple Pricing</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Choose the plan that fits your trading style</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "/month",
                description: "Perfect for beginners",
                features: ["Real-time price data", "Basic AI signals", "5 watchlists", "Email support"],
                cta: "Get Started",
                highlight: false
              },
              {
                name: "Pro",
                price: "$99",
                period: "/month",
                description: "For serious traders",
                features: ["Advanced AI predictions", "Unlimited watchlists", "Portfolio tracking", "Priority support", "API access"],
                cta: "Start Free Trial",
                highlight: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For institutions",
                features: ["Custom integrations", "Dedicated account manager", "Advanced analytics", "White-label options", "24/7 support"],
                cta: "Contact Sales",
                highlight: false
              }
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`border transition-all duration-300 ${
                  plan.highlight
                    ? "border-primary bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 scale-105"
                    : "border-border hover:border-primary"
                }`}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <Button
                    className={`w-full mb-8 ${
                      plan.highlight
                        ? "bg-primary text-background hover:bg-cyan-500"
                        : "border-primary text-primary hover:bg-primary/10"
                    }`}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex gap-3 items-center">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
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
