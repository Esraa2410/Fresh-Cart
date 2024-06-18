import { Token } from '@angular/compiler';
import { IPay } from './cart';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  numOfCartItems = new BehaviorSubject(0);

  constructor(private _HttpClient: HttpClient) {
    this.getLoggedUserCart().subscribe({
      next: (res) => {
        // console.log(res)
        this.numOfCartItems.next(res.numOfCartItems)
      }, error: (err) => {
        //console.log(err)
      }
    })
  }


  headers: any = {
    token: localStorage.getItem('userToken')
  }

  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: productId }, {
      headers: this.headers
    }
    )
  }


  addToWishList(productId: string): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
      { productId: productId }, {
      headers: this.headers
    }
    )
  }

  removeFromWishList(productId: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
      headers: this.headers
    }
    )
  }

  getLoggedUserCart(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: this.headers
    }
    )
  }

  removeCart(productId: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
      headers: this.headers
    }
    )
  }

  updateItemCount(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { count: count }, {
      headers: this.headers
    }
    )
  }

  onlinePayment(cartId: string, userData: FormGroup): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      userData
    )
  }

  getAllOrders(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/`
    )
  }


}
