import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PostService {
// for inject api
  private readonly _HttpClient = inject( HttpClient );
  // post api >> send posts to database
  createPost(formData: FormData): Observable<any> {
    return this._HttpClient.post('https://vitalia.runasp.net/api/post', formData);
  }
  //get all posts for doctor and user
  getAllPosts(): Observable<any> {
    return this._HttpClient.get('https://vitalia.runasp.net/api/post');
  }
  //get all posts for doctor 
  getDoctorPosts(): Observable<any> {
    return this._HttpClient.get('https://vitalia.runasp.net/api/doctor/posts');
  }
  //delete post
 deletepost(id:any): Observable<any> {
    return this._HttpClient.delete(`https://vitalia.runasp.net/api/Post/${id}`);
  }
  //update post
  updatepost(id: any, data: any): Observable<any> {
    return this._HttpClient.put(`https://vitalia.runasp.net/api/post/${id}`, data);
  }

  //for likes
  addlike(id:any, data: any ): Observable<any>
  {
    return this._HttpClient.post( `https://vitalia.runasp.net/api/post/${ id }/like`, data );
  }


}
