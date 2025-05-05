export interface Imoneyseller
{
  orderId: number;
  transactionId: string;
  totalAmount: number;
  createdAt: string;
}
export interface Imoneyall
{
  message: string;
  orders: Imoneyseller[];
  totalNetAmount: number;
}
