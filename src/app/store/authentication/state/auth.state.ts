import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Login, Logout, Register } from '../actions/auth.actions';
import { tap } from 'rxjs/operators';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IAuthResponse } from 'src/app/shared/interfaces/user/auth.response.interface';
import { IAuthUser } from 'src/app/shared/interfaces/user/auth.user.interface';

export class AuthStateModel {
  user: IAuthUser | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
  },
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthService) {}

  @Selector()
  static getUser(state: AuthStateModel) {
    return state.user;
  }

  @Action(Login)
  login(
    { getState, setState }: StateContext<AuthStateModel>,
    { payload }: Login
  ) {
    return this.authService.login(payload).pipe(
      tap((response: IAuthResponse) => {
        localStorage.setItem('access-token', response.AccessToken);
        const exprDate = new Date(Date.now() + 3600 * 10);

        localStorage.setItem('expiresIn', exprDate.toString());
        localStorage.setItem('user', response.UserName);
        localStorage.setItem('id', response.UserId || '');
        const state = getState();
        if (response.UserId !== null) {
          localStorage.setItem('auth', JSON.stringify(true));
        }
        this.authService.setAuth(true);
        this.authService.setUser(response.UserName);
      })
    );
  }

  @Action(Register)
  register(
    { getState, setState }: StateContext<AuthStateModel>,
    { payload }: Register
  ) {
    return this.authService.register(payload);
  }

  @Action(Logout)
  logout({ getState, setState }: StateContext<AuthStateModel>) {
    const state = getState();
    setState({ ...state, user: null });
    return this.authService.logout();
  }
}
