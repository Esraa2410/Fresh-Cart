import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers: any = {
    token: localStorage.getItem('userToken')
  }

  userData = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') !== null) {
      this.decodeUserData();
    }
  }

  decodeUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: any = jwtDecode(encodedToken);
    //console.log(decodedToken);
    this.userData.next(decodedToken);
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }

  register(userData: object): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData)
  }

  login(userData: object): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', userData)
  }

  forgetPassword(userData: FormGroup): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', userData)
  }

  VerfiyPassword(userData: string): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', userData)
  }

  resetPassword(userData: FormGroup): Observable<any> {
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', userData)
  }

  UpdatePassword(userData: FormGroup): Observable<any> {
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/changeMyPassword', userData ,{headers:this.headers})
  }

  UpdateUserData(userData: FormGroup): Observable<any> {
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/users/updateMe', userData ,{headers:this.headers})
  }

}
