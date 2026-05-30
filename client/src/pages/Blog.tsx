import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";

/**
 * Quantum Kienzy - Blog Page
 * Cyberpunk Neon Aesthetic
 * Design: Dark navy background with neon cyan, magenta accents
 */

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "How AI is Revolutionizing Crypto Trading",
      excerpt: "Discover how machine learning algorithms are changing the way traders make decisions in the crypto market.",
      author: "Dr. Sarah Chen",
      date: "May 28, 2024",
      category: "AI",
      readTime: "8 min read",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663707302384/gtDhGhCHVdBZqjQcg62TEo/quantum-ai-icon-dJhSx5thLcY2MuMq99VQGN.webp"
    },
    {
      id: 2,
      title: "Web3 Integration: The Future of Finance",
      excerpt: "Explore how blockchain technology and Web3 are creating new opportunities for decentralized trading.",
      author: "Marcus Johnson",
      date: "May 25, 2024",
      category: "Web3",
      readTime: "10 min read",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663707302384/gtDhGhCHVdBZqjQcg62TEo/quantum-crypto-icon-N67paXFWNfm3H2vYHf77gK.webp"
    },
    {
      id: 3,
      title: "5 Trading Strategies for 2024",
      excerpt: "Learn proven trading strategies that top performers are using to maximize their returns this year.",
      author: "Alex Williams",
      date: "May 22, 2024",
      category: "Trading",
      readTime: "12 min read",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663707302384/gtDhGhCHVdBZqjQcg62TEo/quantum-pattern-1-Jo5FJTumeh6HYxx5vrpWFi.webp"
    },
    {
      id: 4,
      title: "Understanding Market Volatility with AI",
      excerpt: "Deep dive into how our AI models predict and respond to market volatility in real-time.",
      author: "Dr. Sarah Chen",
      date: "May 20, 2024",
      category: "AI",
      readTime: "9 min read",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663707302384/gtDhGhCHVdBZqjQcg62TEo/quantum-hero-bg-UabM7onJbPLY6R5AynLLQ2.webp"
    },
    {
      id: 5,
      title: "Smart Contract Automation Guide",
      excerpt: "A comprehensive guide to automating your trading strategies using smart contracts on Quantum Kienzy.",
      author: "Marcus Johnson",
      date: "May 18, 2024",
      category: "Web3",
      readTime: "11 min read",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663707302384/gtDhGhCHVdBZqjQcg62TEo/quantum-pattern-1-Jo5FJTumeh6HYxx5vrpWFi.webp"
    },
    {
      id: 6,
      title: "Risk Management in Crypto Trading",
      excerpt: "Essential risk management techniques to protect your portfolio and maximize long-term gains.",
      author: "Alex Williams",
      date: "May 15, 2024",
      category: "Trading",
      readTime: "7 min read",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663707302384/gtDhGhCHVdBZqjQcg62TEo/quantum-crypto-icon-N67paXFWNfm3H2vYHf77gK.webp"
    }
  ];

  const categories = ["All", "AI", "Web3", "Trading"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold neon-glow">QUANTUM KIENZY</a>
          <div className="hidden md:flex gap-8">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="/blog" className="text-primary">Blog</a>
            <a href="/roadmap" className="hover:text-primary transition-colors">Roadmap</a>
          </div>
          <Button className="bg-primary text-background hover:bg-cyan-500">Launch App</Button>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-4 border-b border-border">
        <div className="container max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-glow">Quantum Insights</h1>
          <p className="text-xl text-muted-foreground">Stay updated with the latest trends in crypto, AI, and Web3 trading</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container flex gap-4 justify-center flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === "All" ? "default" : "outline"}
              className={cat === "All" ? "bg-primary text-background" : "border-primary text-primary hover:bg-primary/10"}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-background text-sm font-bold rounded">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {article.date} • {article.readTime}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/5 to-magenta-500/5 border-t border-border">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4 neon-glow">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">Get the latest insights delivered to your inbox every week</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-card border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
            <Button className="bg-primary text-background hover:bg-cyan-500">Subscribe</Button>
          </div>
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
