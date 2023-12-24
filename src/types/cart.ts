export interface ICartItem {
    productId: string;
    quantity: number;
    color?: string;
    size?: string;
  }
  
  export type ICart = {
    userId: string;
    items: ICartItem[];
  };