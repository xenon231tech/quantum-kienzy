import { useState, useEffect } from 'react';

export interface CryptoPrice {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  image: string;
}

export function useCryptoPrices() {
  const [prices, setPrices] = useState<CryptoPrice[]>([
    {
      id: 'bitcoin',
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 67420,
      change24h: 3.2,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
    },
    {
      id: 'ethereum',
      symbol: 'ETH',
      name: 'Ethereum',
      price: 3845,
      change24h: 5.1,
      image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
    },
    {
      id: 'cardano',
      symbol: 'ADA',
      name: 'Cardano',
      price: 0.98,
      change24h: 2.8,
      image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png'
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd&include_24hr_change=true&include_market_cap=false'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch crypto prices');
        }

        const data = await response.json();

        // Fetch market data for change percentage
        const marketResponse = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,cardano&order=market_cap_desc&per_page=250&sparkline=false&price_change_percentage=24h'
        );

        if (marketResponse.ok) {
          const marketData = await marketResponse.json();

          const updatedPrices: CryptoPrice[] = marketData.map((coin: any) => ({
            id: coin.id,
            symbol: coin.symbol.toUpperCase(),
            name: coin.name,
            price: coin.current_price,
            change24h: coin.price_change_percentage_24h || 0,
            image: coin.image
          }));

          setPrices(updatedPrices);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching crypto prices:', err);
      } finally {
        setLoading(false);
      }
    };

    // Fetch immediately
    fetchPrices();

    // Set up interval to fetch every 30 seconds
    const interval = setInterval(fetchPrices, 30000);

    return () => clearInterval(interval);
  }, []);

  return { prices, loading, error };
}
