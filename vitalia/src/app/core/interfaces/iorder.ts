export interface Iorder
{
  orderId: number;
  productId: number;
  productName: string;
  quantity: number;
  orderDate: string;
  clientName: string;
  shippingAddress: string;
  clientPhone: string;
  unitPrice: number;
  totalAmount:number
  status: string;
}
