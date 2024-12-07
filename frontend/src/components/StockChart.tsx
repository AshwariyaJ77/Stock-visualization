import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { StockData } from '../types/stock';
import { format } from 'date-fns';

interface StockChartProps {
  data: StockData[];
  showPrediction?: boolean;
}

export function StockChart({ data, showPrediction = false }: StockChartProps) {
  return (
    <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPrediction" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="date" 
            tickFormatter={(date) => format(new Date(date), 'MMM dd')}
          />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            labelFormatter={(date) => format(new Date(date), 'MMM dd, yyyy')}
            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
          />
          <Area
            type="monotone"
            dataKey="close"
            stroke="#6366f1"
            fillOpacity={1}
            fill="url(#colorPrice)"
          />
          {showPrediction && (
            <Area
              type="monotone"
              dataKey="prediction"
              stroke="#22c55e"
              fillOpacity={1}
              fill="url(#colorPrediction)"
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}