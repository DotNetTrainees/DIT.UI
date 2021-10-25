import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUserRegister } from '../../interfaces/user/user.register.interface';
import { IUserAuth } from '../../interfaces/user/user.authenticate.interface';
import { IUserAuthResponse } from '../../interfaces/user/user.auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public isAuth() {
    return !!this.token;
  }

  private isAuthChanges = new BehaviorSubject<boolean>(
    Boolean(localStorage.getItem('auth'))
  );

  private userChanges = new BehaviorSubject<string>(
    localStorage.getItem('user') || ''
  );

  private readonly user = this.userChanges.asObservable();

  private readonly isAuthorized = this.userChanges.asObservable();

  public setAuth(flag: boolean): void {
    this.isAuthChanges.next(flag);
  }

  public setUser(flag: string): void {
    this.userChanges.next(flag);
  }

  public login(user: IUserAuth): Observable<IUserAuthResponse> {
    const myHeaders = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.post<IUserAuthResponse>('path', user, {
      headers: myHeaders,
    });
  }

  public register(user: IUserRegister): Observable<IUserRegister> {
    const myHeaders = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.post<IUserRegister>('path', user, {
      headers: myHeaders,
    });
  }

  public handleErrorAuth(error: HttpErrorResponse): Observable<boolean> {
    localStorage.clear();
    return of(false);
  }

  public logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('auth');
    localStorage.removeItem('access-token');
    localStorage.removeItem('id');
    localStorage.removeItem('expiresIn');
    this.setAuth(false);
  }

  get token() {
    const exprDate = localStorage.getItem('expiresIn');
    if (+new Date() > Number(exprDate)){
      this.logout();

      return null;
    }
    return localStorage.getItem('acces-token');
  }
}
