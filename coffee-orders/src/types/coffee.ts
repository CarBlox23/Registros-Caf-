export interface Coffee {
  id: number;
  name: string;
  quantity: number;
}

export interface CoffeeCardProps {
  name: string;
  quantity: number;
  onOrder: () => void;
}