import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  private readonly _HttpClient = inject( HttpClient );

  forgetpassword (data:any): Observable<any>
  {
    return this._HttpClient.post('https://vitalia.runasp.net/api/auth/forgot-password',data)
  }

  resetpassword (data:any): Observable<any>
  {
    return this._HttpClient.post('https://vitalia.runasp.net/api/auth/reset-password',data)
  }
}
