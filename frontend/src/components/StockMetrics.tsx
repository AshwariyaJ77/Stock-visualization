import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';
import { StockMetrics as StockMetricsType } from '../types/stock';

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
  isPositive?: boolean;
}

function MetricCard({ title, value, icon, change, isPositive }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-100 rounded-lg">
            {icon}
          </div>
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-xl font-semibold">{value}</p>
          </div>
        </div>
        {change && (
          <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </span>
        )}
      </div>
    </div>
  );
}

export function StockMetrics({ metrics }: { metrics: StockMetricsType }) {
  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

  const formatVolume = (value: number) =>
    new Intl.NumberFormat('en-US', { notation: 'compact' }).format(value);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Current Price"
        value={formatCurrency(metrics.currentPrice)}
        icon={<DollarSign className="w-5 h-5 text-indigo-600" />}
        change={`${metrics.changePercent > 0 ? '+' : ''}${metrics.changePercent.toFixed(2)}%`}
        isPositive={metrics.changePercent > 0}
      />
      <MetricCard
        title="Market Cap"
        value={formatCurrency(metrics.marketCap)}
        icon={<BarChart3 className="w-5 h-5 text-indigo-600" />}
      />
      <MetricCard
        title="52 Week High"
        value={formatCurrency(metrics.high52Week)}
        icon={<TrendingUp className="w-5 h-5 text-indigo-600" />}
      />
      <MetricCard
        title="Volume"
        value={formatVolume(metrics.volume)}
        icon={<TrendingDown className="w-5 h-5 text-indigo-600" />}
      />
    </div>
  );
}