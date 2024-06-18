import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token: any = localStorage.getItem('userToken')
    
    let modifyReq=request.clone({
      
      headers:request.headers.set('token',token)
    })
    console.log('modifyReq'+modifyReq)
    return next.handle(modifyReq);
  }
}
