import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, TrendingDown, Plus, Minus, Eye, EyeOff, LogOut, Menu, X } from "lucide-react";
import { useCryptoPrices } from "@/hooks/useCryptoPrices";
import { useState } from "react";

/**
 * Quantum Kienzy - Trading Dashboard
 * Cyberpunk Neon Aesthetic
 * Design: Dark navy background with neon cyan, magenta accents
 */

interface PortfolioItem {
  symbol: string;
  name: string;
  amount: number;
  price: number;
  value: number;
  change24h: number;
}

interface Order {
  id: string;
  type: "buy" | "sell";
  symbol: string;
  amount: number;
  price: number;
  date: string;
  status: "completed" | "pending" | "cancelled";
}

export default function Dashboard() {
  const { prices } = useCryptoPrices();
  const [showBalance, setShowBalance] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock portfolio data
  const portfolio: PortfolioItem[] = [
    { symbol: "BTC", name: "Bitcoin", amount: 0.5, price: 67420, value: 33710, change24h: 3.2 },
    { symbol: "ETH", name: "Ethereum", amount: 5, price: 3845, value: 19225, change24h: 5.1 },
    { symbol: "ADA", name: "Cardano", amount: 1000, price: 0.98, value: 980, change24h: 2.8 }
  ];

  // Mock order history
  const orders: Order[] = [
    { id: "1", type: "buy", symbol: "BTC", amount: 0.5, price: 65000, date: "2024-05-28", status: "completed" },
    { id: "2", type: "sell", symbol: "ETH", amount: 2, price: 3800, date: "2024-05-27", status: "completed" },
    { id: "3", type: "buy", symbol: "ADA", amount: 500, price: 0.95, date: "2024-05-26", status: "completed" },
    { id: "4", type: "buy", symbol: "BTC", amount: 0.1, price: 66500, date: "2024-05-25", status: "pending" }
  ];

  const totalBalance = portfolio.reduce((sum, item) => sum + item.value, 0);
  const totalChange = portfolio.reduce((sum, item) => sum + (item.value * item.change24h / 100), 0);
  const totalChangePercent = (totalChange / totalBalance) * 100;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold neon-glow">QUANTUM KIENZY</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="/dashboard" className="text-primary">Dashboard</a>
            <a href="/blog" className="hover:text-primary transition-colors">Blog</a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 space-y-4">
            <a href="/" className="block hover:text-primary transition-colors">Home</a>
            <a href="/dashboard" className="block text-primary">Dashboard</a>
            <a href="/blog" className="block hover:text-primary transition-colors">Blog</a>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-8 px-4">
        <div className="container">
          {/* Balance Card */}
          <Card className="bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 border-primary mb-8 p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-muted-foreground mb-2">Total Balance</p>
                <div className="flex items-center gap-4">
                  <h1 className="text-5xl font-bold text-primary">
                    {showBalance ? `$${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '••••••'}
                  </h1>
                  <button onClick={() => setShowBalance(!showBalance)} className="text-muted-foreground hover:text-primary transition-colors">
                    {showBalance ? <Eye className="w-6 h-6" /> : <EyeOff className="w-6 h-6" />}
                  </button>
                </div>
              </div>
              <div className={`text-right ${totalChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                <p className="text-sm mb-2">24h Change</p>
                <p className="text-2xl font-bold flex items-center justify-end gap-2">
                  {totalChange >= 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                  {Math.abs(totalChange).toFixed(2)} ({totalChangePercent.toFixed(2)}%)
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-primary text-background hover:bg-cyan-500 flex-1">
                <Plus className="w-4 h-4 mr-2" /> Buy
              </Button>
              <Button className="bg-accent text-background hover:bg-magenta-600 flex-1">
                <Minus className="w-4 h-4 mr-2" /> Sell
              </Button>
            </div>
          </Card>

          {/* Portfolio Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Holdings */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4 neon-glow">Your Holdings</h2>
              <Card className="bg-card border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 text-muted-foreground">Asset</th>
                        <th className="text-right p-4 text-muted-foreground">Amount</th>
                        <th className="text-right p-4 text-muted-foreground">Price</th>
                        <th className="text-right p-4 text-muted-foreground">Value</th>
                        <th className="text-right p-4 text-muted-foreground">24h Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {portfolio.map((item) => (
                        <tr key={item.symbol} className="border-b border-border hover:bg-card/50 transition-colors">
                          <td className="p-4 font-bold">{item.symbol}</td>
                          <td className="text-right p-4">{item.amount.toLocaleString()}</td>
                          <td className="text-right p-4 text-primary">${item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td className="text-right p-4 font-bold">${item.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td className={`text-right p-4 font-bold ${item.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {item.change24h >= 0 ? '+' : ''}{item.change24h.toFixed(2)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Market Overview */}
            <div>
              <h2 className="text-2xl font-bold mb-4 neon-glow">Market Overview</h2>
              <div className="space-y-4">
                {prices.slice(0, 3).map((crypto) => (
                  <Card key={crypto.id} className="bg-card border-border p-4 hover:border-primary transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <img src={crypto.image} alt={crypto.symbol} className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="font-bold">{crypto.symbol}</p>
                        <p className="text-xs text-muted-foreground">{crypto.name}</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold text-primary mb-2">${crypto.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                    <p className={`text-sm ${crypto.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Order History */}
          <div>
            <h2 className="text-2xl font-bold mb-4 neon-glow">Recent Orders</h2>
            <Card className="bg-card border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-muted-foreground">Type</th>
                      <th className="text-left p-4 text-muted-foreground">Asset</th>
                      <th className="text-right p-4 text-muted-foreground">Amount</th>
                      <th className="text-right p-4 text-muted-foreground">Price</th>
                      <th className="text-left p-4 text-muted-foreground">Date</th>
                      <th className="text-left p-4 text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-b border-border hover:bg-card/50 transition-colors">
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded text-sm font-bold ${order.type === 'buy' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                            {order.type.toUpperCase()}
                          </span>
                        </td>
                        <td className="p-4 font-bold">{order.symbol}</td>
                        <td className="text-right p-4">{order.amount.toLocaleString()}</td>
                        <td className="text-right p-4 text-primary">${order.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                        <td className="p-4 text-muted-foreground">{order.date}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded text-sm font-bold ${
                            order.status === 'completed' ? 'bg-primary/20 text-primary' :
                            order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
