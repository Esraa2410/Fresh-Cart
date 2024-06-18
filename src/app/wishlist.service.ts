import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  headers: any = {
    token: localStorage.getItem('userToken')
  }
  constructor(private _HttpClient:HttpClient) { }

  removeFromWishList(productId: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
      headers: this.headers
    }
    )
  }
}
