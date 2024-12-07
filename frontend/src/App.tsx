import React, { useState } from 'react';
import { StockChart } from './components/StockChart';
import { StockMetrics } from './components/StockMetrics';
import { StockControls } from './components/StockControls';
import { LineChart } from 'lucide-react';

// Temporary mock data - replace with actual API calls to your Python backend
const mockStockData = Array.from({ length: 30 }, (_, i) => ({
  date: new Date(2024, 1, i + 1).toISOString(),
  open: 150 + Math.random() * 10,
  high: 160 + Math.random() * 10,
  low: 140 + Math.random() * 10,
  close: 155 + Math.random() * 10,
  volume: 1000000 + Math.random() * 500000,
  prediction: 157 + Math.random() * 10,
}));

const mockMetrics = {
  symbol: 'AAPL',
  currentPrice: 155.85,
  change: 2.35,
  changePercent: 1.53,
  high52Week: 178.35,
  low52Week: 124.17,
  marketCap: 2500000000000,
  volume: 75000000,
};

function App() {
  const [symbol, setSymbol] = useState('AAPL');
  const [showPrediction, setShowPrediction] = useState(false);

  const handleSymbolChange = (newSymbol: string) => {
    setSymbol(newSymbol);
    // Here you would fetch new data from your Python backend
  };

  const handleTimeframeChange = (timeframe: string) => {
    // Here you would fetch new data for the selected timeframe
    console.log('Timeframe changed:', timeframe);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <LineChart className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Stock Market Analysis</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-6">
        <StockControls
          symbol={symbol}
          onSymbolChange={handleSymbolChange}
          onTimeframeChange={handleTimeframeChange}
          onTogglePrediction={() => setShowPrediction(!showPrediction)}
          showPrediction={showPrediction}
        />

        <StockMetrics metrics={mockMetrics} />
        
        <StockChart 
          data={mockStockData}
          showPrediction={showPrediction}
        />

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Technical Analysis</h2>
          <p className="text-gray-600">
            This section will display technical indicators and ML predictions from your Python backend.
            Connect your backend API to replace the mock data with real-time analysis.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;