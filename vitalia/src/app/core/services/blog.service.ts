import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService
{

//inject httpclient
  private readonly _HttpClient = inject( HttpClient );

  // post api >> send blog to database
  createBlog (formData:FormData): Observable<any>
  {
  return this._HttpClient.post('https://vitalia.runasp.net/api/Blog',formData)
  }
  //get doctor blog of front
  getDoctorBlog (): Observable<any>
  {
  return  this._HttpClient.get('https://vitalia.runasp.net/api/Blog/doctor-blogs-lite')
  }
  //get client blog of front
  getUserBlog (): Observable<any>
  {
  return  this._HttpClient.get('https://vitalia.runasp.net/api/Blog/client-blogs-lite')
  }

//all information of the blog doctor and client
  getSpecificBlog(id: any): Observable<any> {
    return this._HttpClient.get(`https://vitalia.runasp.net/api/Blog/${id}`);
  }

  //api for delete blog
  deleteBlog (id:any): Observable<any>
  {
    return this._HttpClient.delete(`https://vitalia.runasp.net/api/Blog/${id}`)
  }

  //api for update blog
  updateblog(id: any, data: any): Observable<any> {
    return this._HttpClient.put(`https://vitalia.runasp.net/api/Blog/${id}`, data);
  }

}
