export class CacheService {
  private static cache = new Map<string, { data: any; timestamp: number }>();
  private static TTL = 5 * 60 * 1000; // 5 minutes

  static set(key: string, data: any, ttl = this.TTL): void {
    this.cache.set(key, { data, timestamp: Date.now() + ttl });
  }

  static get<T>(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;
    if (Date.now() > item.timestamp) {
      this.cache.delete(key);
      return null;
    }
    return item.data;
  }

  static clear(): void {
    this.cache.clear();
  }
}
