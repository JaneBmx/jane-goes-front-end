import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

  constructor() {}

  private readonly apiUrl = 'http://localhost:8087';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const urlStart = request.url.split('/')[0];

    const headers: {[key: string]: string} = {
      // Accept: 'application/json; charset=utf-8',
    };

    switch (urlStart) {
      case 'https:':
      case 'http:':
        // mock or external-to-app request
        break;
      default:
        request = request.clone({
          setHeaders: headers,
          url: `${this.apiUrl}/${request.url}`
        });
    }
    return next.handle(request);
  }
}
