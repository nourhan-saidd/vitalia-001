import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthsellerService {
// cartona for user data of token
  userData: any = null;
  //inject for navigate
  private readonly _router = inject( Router );
//inject of api
  private readonly _HttpClient = inject( HttpClient )

  //api register seller
   sendRegisterseller(formData: FormData): Observable<any> {
      return this._HttpClient.post('https://vitalia.runasp.net/api/auth/register/seller', formData)
        .pipe(
          catchError(err => {
            console.error('Registration failed:', err);
            return of({ error: true, message: 'Registration failed. Please try again later.' });
          })
        );
    }
  //api login seller
    sendloginseller(data: object): Observable<any> {
      return this._HttpClient.post('https://vitalia.runasp.net/api/auth/login', data)
        .pipe(
          catchError(err => {
            console.error('Login failed:', err);
            return of({ error: true, message: 'Login failed. Please try again later.' });
          })
        );
    }
  // for token
  saveUserData(): void {
    const userToken = localStorage.getItem('usertoken');
    if (userToken) {
      this.userData = jwtDecode(userToken);
      // تخزين البيانات في الـ localStorage
      localStorage.setItem('userData', JSON.stringify(this.userData));
    }
  }
//api for loggout
  logout (): void
  {
    localStorage.removeItem( 'usertoken' );
    this.userData = null;
    //navigate login

    //or call api for remove token
    this._router.navigate( [ '/sellerlogin' ] );
}


    //api for upload profile photo
    uploadProfilePhoto(formData: FormData): Observable<any> {
      return this._HttpClient.post('https://vitalia.runasp.net/api/seller/upload-image', formData);
    }


    //api for set photo
    setProfilePhoto (): Observable<any>
    {
      return this._HttpClient.get( 'https://vitalia.runasp.net/api/seller/image' , {responseType:'blob'});
  }


    //api for get seller name
    getSellerName (): Observable<any> {
      return this._HttpClient.get('https://vitalia.runasp.net/api/seller/full-name');
    }

  //get all info
  getAllInfo (): Observable<any>
  {
    return this._HttpClient.get( 'https://vitalia.runasp.net/api/Profile/seller-profile' );
  }

  //update all info
  updateAllInfo (formdata:FormData): Observable<any>
  {
    return this._HttpClient.put( 'https://vitalia.runasp.net/api/Profile/seller-update-profile', formdata );
  }
}
