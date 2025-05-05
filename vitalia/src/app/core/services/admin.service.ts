import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  //inject for api
  private readonly _HttpClient = inject(HttpClient);
  //inject for navigate
  private readonly _router = inject(Router);
  //admin sign up
  sendRegisterAdmin(data: object): Observable<any> {
    return this._HttpClient.post(
      'https://vitalia.runasp.net/api/admin-auth/signup',
      data
    );
  }
  //admin login
  sendLoginAdmin(data: object): Observable<any> {
    return this._HttpClient.post(
      'https://vitalia.runasp.net/api/admin-auth/login',
      data
    );
  }

  // cartona for user data of token
  userData: any = null;

  // for token
  saveUserData(): void {
    if (localStorage.getItem('usertoken') !== null) {
      this.userData = jwtDecode(localStorage.getItem('usertoken')!);
    }
  }


  //for sign out



  // ****************

//for doctor acceptence
  //for get all doctors
  getAllDoctors (): Observable<any>
  {
    return this._HttpClient.get('https://vitalia.runasp.net/api/admin-auth/pending-doctors')
  }

  //show documents
  showDoctorDocuments(id: number): Observable<Blob> {
    return this._HttpClient.get(`https://vitalia.runasp.net/api/admin-auth/download-doctor-certification/${id}`, {
      responseType: 'blob'
    });
  }

  //accept doctor
  acceptDoctor (id:any, status:string): Observable<any>
  {
    return this._HttpClient.put( 'https://vitalia.runasp.net/api/admin-auth/doctor-acceptance',
      {
        "id": id,
        "status":status,

      }
    )
  }

  //for seller acceptence
  getAllSellers (): Observable<any>
  {
    return this._HttpClient.get( 'https://vitalia.runasp.net/api/admin-auth/pending-sellers' );
  }

  //show documents
  showSellerDocument (id:number): Observable<any>
  {
    return this._HttpClient.get( `https://vitalia.runasp.net/api/admin-auth/download-seller-certifications/${ id }`,
      {
        responseType: 'blob'
  }
)
  }

  //accept sellers
  acceptseller (id:number,status:string): Observable<any>
  {
    return this._HttpClient.put( 'https://vitalia.runasp.net/api/admin-auth/seller-acceptance', {
      "id": id,
      "status":status,
    })
  }

  //send technical support
  sendmessage (data:any): Observable<any>
  {
    return this._HttpClient.post('https://vitalia.runasp.net/api/admin-auth/submit-support',data)
  }

  //get technical support
  getMessages (): Observable<any>
  {
    return this._HttpClient.get( 'https://vitalia.runasp.net/api/admin-auth/all-supports' );
  }


  //all money seller
  getMoneydoctor (): Observable<any>
  {
    return this._HttpClient.get( 'https://vitalia.runasp.net/api/admin-auth/admin-earnings-Doctor' );
}


  //all money doctor
  getMoneyseller (): Observable<any>
  {
    return this._HttpClient.get( 'https://vitalia.runasp.net/api/admin-auth/admin-earnings-from-sellers' );
}
}

