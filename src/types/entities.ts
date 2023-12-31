export interface ProductTypes {
  id: number;
  name: string;
  brand: string;
  price: string;
  available: boolean;
  weight: number;
  options: [
    {
      color: string;
      power?: number;
      storage?: number;
      quantity: number;
    }
  ];
}

export interface SelectedProductTypes {
  color: string;
  storage: string | undefined;
  power: number | undefined;
  quantity: number;
  id: number | string;
}

export interface CartItemTypes {
  id: number;
  name: string;
  brand: string;
  price: string;
  weight: number;
  color: string;
  power?: number | undefined;
  storage?: number | undefined;
  quantity: number;
  cartQuantity: number;
  variantId: string;
  variantDetails: {
    color: string;
    power?: number;
    storage?: number;
    quantity: number;
  };
}
