import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatedoctorService {
private readonly _HttpClient=inject(HttpClient)
//send dates
  adddate (data:any): Observable<any>
  {
    return this._HttpClient.post('https://vitalia.runasp.net/api/Appointment/add-appointment',data)
  }

  //getdate
  getdate (): Observable<any>
  {
    return this._HttpClient.get('https://vitalia.runasp.net/api/Appointment/doctor-appointments')
  }

  //delete date
  deletedate (appointmentId:any):Observable<any>
  {
    return this._HttpClient.delete( `https://vitalia.runasp.net/api/Appointment/delete-appointment/${ appointmentId }` );
  }

  //update date
  updatedate (data:any): Observable<any>
  {
    return this._HttpClient.put( 'https://vitalia.runasp.net/api/Appointment/update-appointment', data );
  }
}
