import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthclientService
{
// cartona for user data of token
  userData: any = null;
// inject for api
  private readonly _httpClient = inject( HttpClient );
  //inject for navigate
  private readonly _router = inject( Router );
  // API Register Client
  sendRegisterClient(data: object): Observable<any> {
    return this._httpClient.post('https://vitalia.runasp.net/api/auth/register/client', data);
  }
  // API Login Client
  sendloginClient(data: object): Observable<any> {
    return this._httpClient.post('https://vitalia.runasp.net/api/auth/login', data);
  }
// for token
  saveUserData (): void
  {
    if (  localStorage.getItem('usertoken') !==null )
    {
 this.userData =jwtDecode( localStorage.getItem('usertoken')! )
}
}
//for log out
  logout (): void
  {
    localStorage.removeItem( 'usertoken' );
    this.userData = null;
    //navigate login

    //or call api for remove token
    this._router.navigate( [ '/login' ] );
  }


  //get register info
  getInfo (): Observable<any>
  {
    return this._httpClient.get( 'https://vitalia.runasp.net/api/Profile/client-profile' );
  }
  //update register info
  updateInfo (data:any): Observable<any>
  {
    return this._httpClient.put( 'https://vitalia.runasp.net/api/Profile/client-update-profile', data, {
      responseType: 'text'
    })
  }

}
