import { inject, Injectable } from '@angular/core';
import { Iappointment } from '../interfaces/iappointment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  //inject httpclient
  private readonly _HttpClient = inject(HttpClient);
  //for upload profile doctor
  uploadProfile(formdata: FormData): Observable<any> {
    return this._HttpClient.post(
      'https://vitalia.runasp.net/api/doctor/profile',
      formdata
    );
  }
  //get info in fornt for doctor
  getinfo(): Observable<any> {
    return this._HttpClient.get('https://vitalia.runasp.net/api/doctor/basic');
  }
  //get all info for doctor
  getAllInfo(): Observable<any> {
    return this._HttpClient.get(
      'https://vitalia.runasp.net/api/doctor/details'
    );
  }
  //update info
  updateInfo(formdata: FormData): Observable<any> {
    return this._HttpClient.put(
      'https://vitalia.runasp.net/api/doctor/Update-Profile',
      formdata
    );
  }
  //enable vs desable
  enable(): Observable<any> {
    return this._HttpClient.put(
      'https://vitalia.runasp.net/api/doctor/toggle-profile-status',
      {
        profileStatus: 'Enabled',
      }
    );
  }
  //get front info
  getInfoClient(): Observable<any> {
    return this._HttpClient.get(
      'https://vitalia.runasp.net/api/doctor/Client-basic'
    );
  }
  //get all info
  getAllInfoClient(id: any): Observable<any> {
    return this._HttpClient.get(
      `https://vitalia.runasp.net/api/doctor/Client-details/${id}`
    );
  }
  //get dates
  getdate(id: any): Observable<any> {
    return this._HttpClient.get(
      `https://vitalia.runasp.net/api/Appointment/available-appointments/${id}`
    );
  }
  //send phone number
  senddataphone(data: any): Observable<any> {
    return this._HttpClient.put(
      'https://vitalia.runasp.net/api/AppointmentPayment/update-client',
      data
    );
  }

  createOrder(appointmentId: number) {
    return this._HttpClient.post(
      'https://vitalia.runasp.net/api/AppointmentPayment/create-order',
      {
        appointmentId,
      }
    );
  }

  createWalletOrder(OrderId: number): Observable<any> {
    return this._HttpClient.post(
      'https://vitalia.runasp.net/api/AppointmentPayment/get-payment-key',
      {
        OrderId,
        isWallet: true,
      }
    );
  }

  getPaymentLink(paymentKey: string, appointmentId: number): Observable<{ payment_link: string }> {
    return this._HttpClient.post<{ payment_link: string }>(
      'https://vitalia.runasp.net/api/AppointmentPayment/get-payment-link',
      {
        paymentKey,
        appointmentId
      }
    );
  }



//get consultation and money
  getconsultation (): Observable<any>
  {
    return this._HttpClient.get( 'https://vitalia.runasp.net/api/AppointmentPayment/doctor-bookings' );
  }


  ///get money all money
  getallmoney (): Observable<any>
  {
    return this._HttpClient.get( 'https://vitalia.runasp.net/api/AppointmentPayment/doctor-earnings' );
  }
}
