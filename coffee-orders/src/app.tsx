import { useState } from 'react';
import type { Coffee } from './types/coffee';
import { CoffeeCard } from './components/CoffeeCard';

const INITIAL_COFFEES: Coffee[] = [
  { id: 1, name: 'Espresso', quantity: 0 },
  { id: 2, name: 'Capuchino', quantity: 0 },
  { id: 3, name: 'Latte', quantity: 0 },
];

export default function App() {
  const [coffees, setCoffees] = useState<Coffee[]>(INITIAL_COFFEES);

  const handleIncrement = (id: number) => {
    setCoffees((prevCoffees) =>
      prevCoffees.map((coffee) =>
        coffee.id === id ? { ...coffee, quantity: coffee.quantity + 1 } : coffee
      )
    );
  };

  const totalOrders = coffees.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-amber-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md border border-amber-100">
        <h1 className="text-2xl font-bold text-amber-900 text-center mb-1">
          Registro de Pedidos
        </h1>
        <p className="text-center text-sm font-medium text-gray-600 mb-6">
          Total de cafés pedidos: <span className="text-amber-600 font-bold text-base">{totalOrders}</span>
        </p>

        <div className="space-y-3">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              name={coffee.name}
              quantity={coffee.quantity}
              onOrder={() => handleIncrement(coffee.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}