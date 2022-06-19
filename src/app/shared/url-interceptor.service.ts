import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

const url = 'https://bog-angular-course-api.herokuapp.com/';
export class UrlInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler){
    return next.handle(req.clone({
      url: url + req.url
    }));
  }
}
