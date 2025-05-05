import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  //inject httpclient
  private readonly _HttpClient = inject(HttpClient);

  //api for send product to backend
  addproduct(formdata: FormData): Observable<any> {
    return this._HttpClient.post(
      'https://vitalia.runasp.net/api/Products/add-product',
      formdata
    );
  }

  //api for get specific products
  getsellerproduct(): Observable<any> {
    return this._HttpClient.get(
      'https://vitalia.runasp.net/api/Products/seller-products'
    );
  }

  //api for delete product
  deleleproduct(id: any): Observable<any> {
    return this._HttpClient.delete(
      `https://vitalia.runasp.net/api/Products/${id}`
    );
  }

  //api for update
  updateproduct(id: any, data: any): Observable<any> {
    return this._HttpClient.put(
      `https://vitalia.runasp.net/api/Products/${id}`,
      data
    );
  }

  //api for get all products in shop page
  getproductshop(): Observable<any> {
    return this._HttpClient.get(
      'https://vitalia.runasp.net/api/Products/all-products-lite'
    );
  }
  //api for get product details
  getspecificprodut(id: any): Observable<any> {
    return this._HttpClient.get(
      `https://vitalia.runasp.net/api/Products/${id}`
    );
  }

  //api to get order status
  getOrderStatus(): Observable<any> {
    return this._HttpClient.get(
      'https://vitalia.runasp.net/api/Order/seller-orders'
    );
  }

  //api update status completed or success
  updateStatus(orderId: number, status: string): Observable<any> {
    return this._HttpClient.put(
      'https://vitalia.runasp.net/api/Order/update-order-status',
      {
        orderId: orderId,
        status: status
      }
    );
  }
  //api to get money
  moneySeller (): Observable<any>
  {
    return this._HttpClient.get( 'https://vitalia.runasp.net/api/Order/completed-orders' );
  }
}
