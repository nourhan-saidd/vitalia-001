export interface Icart
{
  productCount: number;
  productId: number;
  productImage: string;
  productName: string;
  productPrice: number;
  totalPrice: number;
}
export interface IcartResponse {
  items: Icart[];
  totalPrice: number;
}
