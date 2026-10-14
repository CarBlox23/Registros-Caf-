import React from 'react';
import type { CoffeeCardProps } from '../types/coffee';

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ name, quantity, onOrder }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div>
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">
          Pedidos: <span className="font-semibold text-amber-700">{quantity}</span>
        </p>
      </div>
      <button
        onClick={onOrder}
        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-md transition-colors"
      >
        Pedir
      </button>
    </div>
  );
};