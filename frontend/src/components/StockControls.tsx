import React from 'react';
import { Calendar, Filter } from 'lucide-react';

interface StockControlsProps {
  symbol: string;
  onSymbolChange: (symbol: string) => void;
  onTimeframeChange: (timeframe: string) => void;
  onTogglePrediction: () => void;
  showPrediction: boolean;
}

export function StockControls({
  symbol,
  onSymbolChange,
  onTimeframeChange,
  onTogglePrediction,
  showPrediction,
}: StockControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-md">
      <div className="flex-1">
        <label htmlFor="symbol" className="block text-sm font-medium text-gray-700">Stock Symbol</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="symbol"
            id="symbol"
            value={symbol}
            onChange={(e) => onSymbolChange(e.target.value.toUpperCase())}
            className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="AAPL"
          />
        </div>
      </div>

      <div className="flex-1">
        <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700">Timeframe</label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <select
            id="timeframe"
            name="timeframe"
            onChange={(e) => onTimeframeChange(e.target.value)}
            className="block w-full rounded-md border-gray-300 pl-3 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="1D">1 Day</option>
            <option value="1W">1 Week</option>
            <option value="1M">1 Month</option>
            <option value="3M">3 Months</option>
            <option value="1Y">1 Year</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <Calendar className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex items-end">
        <button
          onClick={onTogglePrediction}
          className={`inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium ${
            showPrediction
              ? 'border-indigo-500 text-indigo-500 hover:bg-indigo-50'
              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Filter className="mr-2 h-4 w-4" />
          Show Prediction
        </button>
      </div>
    </div>
  );
}