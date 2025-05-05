import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly _HttpClient = inject( HttpClient );


  //add product to cart
  addProductCart (id:any): Observable<any>
  {
    return this._HttpClient.post( 'https://vitalia.runasp.net/api/Cart/add',
      {
        "productId": id
      }
    )
  }
  //get all cart
getProductCart(): Observable<any>{
  return this._HttpClient.get( 'https://vitalia.runasp.net/api/Cart/items' );
}
  //remove product
  removeOneProduct (id:any): Observable<any>
  {
    return this._HttpClient.delete(`https://vitalia.runasp.net/api/Cart/remove/${id}`)
  }
  //decrease items number
  decrease (id:any): Observable<any>
  {
    return this._HttpClient.put( 'https://vitalia.runasp.net/api/Cart/decrease', {
      "productId":id
    })
  }

  //increase
  increase ( id: any ): Observable<any>
  {
    return this._HttpClient.post( 'https://vitalia.runasp.net/api/Cart/add',
      {
        "productId":id
      }
    )
  }

  //delete all cart
  deleteCart (): Observable<any>
  {
    return this._HttpClient.delete('https://vitalia.runasp.net/api/Cart/clear')
  }
}


