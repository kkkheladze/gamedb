import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const statement = req.url.startsWith(environment.baseApi);
    if (!statement) return next.handle(req);

    const newReq = req.clone({
      params: (req.params ? req.params : new HttpParams()).set(
        'key',
        environment.apiKey
      ),
    });
    return next.handle(newReq);
  }
}
