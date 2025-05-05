import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { jwtDecode } from 'jwt-decode';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthdoctorService
{
// cartona for user data of token
  userData: any = null;
  //inject for navigate
  private readonly _router = inject( Router );
//inject of api
  private readonly _HttpClient = inject( HttpClient )

  //api register doctor
  sendRegisterDoctor(formData: FormData): Observable<any> {
    return this._HttpClient.post('https://vitalia.runasp.net/api/auth/register/doctor', formData)
      .pipe(
        catchError(err => {
          console.error('Registration failed:', err);
          return of({ error: true, message: 'Registration failed. Please try again later.' });
        })
      );
  }

  //api login doctor

  sendloginDoctor(data: object): Observable<any> {
    return this._HttpClient.post('https://vitalia.runasp.net/api/auth/login', data)
      .pipe(
        catchError(err => {
          console.error('Login failed:', err);
          return of({ error: true, message: 'Login failed. Please try again later.' });
        })
      );
  }


  //api for upload profile photo
  uploadProfilePhoto(formData: FormData): Observable<any> {
    return this._HttpClient.post('https://vitalia.runasp.net/api/doctor/upload-image', formData);
  }


  //api for set photo
  setProfilePhoto (): Observable<any>
  {
    return this._HttpClient.get( 'https://vitalia.runasp.net/api/doctor/image' , {responseType:'blob'});
}


  //api for get doctor name
  getDoctorName (): Observable<any> {
    return this._HttpClient.get('https://vitalia.runasp.net/api/doctor/full-name');
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


  //for sign out
  logout (): void
  {
    localStorage.removeItem( 'usertoken' );
    this.userData = null;
    //navigate login

    //or call api for remove token
    this._router.navigate( [ '/doctorlogin' ] );
}

    //api for getlogged data for doctor
 getloggeddatadoctor(): Observable<any> {
  return this._HttpClient.get('http://vitalia.runasp.net/api/auth/changepassword')
    .pipe(
      catchError(err => {
        console.error('Login failed:', err);
        return of({ error: true, message: 'Login failed. Please try again later.' });
      })
    );
}

  //get doctor information

  getAllinfo (): Observable<any>
  {
    return this._HttpClient.get('https://vitalia.runasp.net/api/Profile/doctor-profile')
  }

  //update all info
  updateAllinfo (formatData:FormData): Observable<any>
  {
    return this._HttpClient.put('https://vitalia.runasp.net/api/Profile/doctor-update-profile',formatData)
  }
}
