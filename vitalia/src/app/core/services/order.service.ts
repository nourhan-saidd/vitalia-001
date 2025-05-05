import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly _HttpClient = inject( HttpClient );


    // API to send Address (POST)
    sendAddress(data: any): Observable<any> {
      return this._HttpClient.put('https://vitalia.runasp.net/api/Cart/update-client', data);
    }


  // API to get Auth Token
  getAuthToken(): Observable<any> {
    return this._HttpClient.post('https://vitalia.runasp.net/api/Payment/get-auth-token', {});
  }

  // API to create an Order
  createOrder(authToken: string): Observable<any> {
    return this._HttpClient.post('https://vitalia.runasp.net/api/Payment/create-order', { auth_token: authToken });
  }

  // API to get Payment Key
  getPaymentKey(authToken: string, orderId: number, phoneNumber: string, isWallet: boolean): Observable<any> {
    const paymentKeyBody = {
      authToken,
      orderId,
      phoneNumber,
      isWallet
    };
    return this._HttpClient.post('https://vitalia.runasp.net/api/Payment/get-payment-key', paymentKeyBody);
  }

  // API to get Payment Link
  getPaymentLink(paymentKey: string): Observable<any> {
    return this._HttpClient.post('https://vitalia.runasp.net/api/Payment/get-payment-link', { paymentKey });
  }

}
