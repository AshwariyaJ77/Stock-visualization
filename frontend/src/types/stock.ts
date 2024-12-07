export interface StockData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  prediction?: number;
}

export interface StockMetrics {
  symbol: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  high52Week: number;
  low52Week: number;
  marketCap: number;
  volume: number;
}