import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IAuthUser } from '../../interfaces/user/auth.user.interface';
import { IAuthResponse } from '../../interfaces/user/auth.response.interface';
import { IRegisterUser } from '../../interfaces/user/register.user.interface';
import { catchError, map } from 'rxjs/operators';

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

  public login(user: IAuthUser): Observable<IAuthResponse> {
    const myHeaders = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.post<IAuthResponse>('path', user, {
      headers: myHeaders,
    });
  }

  public register(user: IRegisterUser): Observable<any> {
    const myHeaders = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.post<any>('path', user, {
      headers: myHeaders,
    });
  }

  public whoami(): Observable<boolean> | any {
    // return this.http.get(`/api/user/whoami`).pipe(
    //   map((val) => {
    //     const id = val._id;
    //     const localId = localStorage.getItem('id');
    //     if (val) {
    //       if (localId === id) {
    //         return true;
    //       } else {
    //         localStorage.clear();
    //         return false;
    //       }
    //     } else {
    //       return false;
    //     }
    //   }),
    //   catchError(this.handleErrorAuth.bind(this))
    // );
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
