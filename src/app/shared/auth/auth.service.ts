import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthResponseModel } from './auth-response.model';
import { LoaderService} from '../loader/loader.service';
import { catchError, tap } from 'rxjs/operators';
import {throwError, Subject, BehaviorSubject} from 'rxjs';
import { User } from './user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(undefined);
  private timer: any;

  constructor(private http: HttpClient, private loaderService: LoaderService, private router: Router) {}

  register(name, username, password) {
    return this.http
      .post<AuthResponseModel>('register', {
        name,
        username,
        password,
      })
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
        tap((resData) => this.handleAuth(resData))
      );
  }

  login(username, password) {
    return this.http
      .post<AuthResponseModel>('login', {
        username,
        password,
      })
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
        tap((resData) => {
          this.handleAuth(resData);
        })
      );
  }

  handleAuth = (resData: AuthResponseModel) => {
    const user = new User(
      resData.name,
      resData.username,
      resData.image,
      resData.token,
      new Date(resData.expirationDate)
    );
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.autoLogOut(new Date(resData.expirationDate).getTime() - new Date().getDate());
  }

  logOut(){
    this.user.next(undefined);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.timer){
      clearTimeout(this.timer);
    }
    clearTimeout(this.timer);
  }
  autoLogin(){
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData){
      return;
    }
    const user = new User(
      userData.name,
      userData.username,
      userData.image,
      userData.token,
      new Date(userData.expirationDate)
    );

    if (user){
      this.user.next(user);
    }
    this.autoLogOut(userData.expirationDate.expirationDate - new Date().getTime());
  }
  autoLogOut(expirationDuration: number){
    this.timer = setTimeout(
      () => this.logOut(),
      Math.min(2147483647, expirationDuration)
    );
  }

}















