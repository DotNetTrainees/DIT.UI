import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from 'ngxs';
import { IUser } from 'src/app/shared/interfaces/user/user.interface';
import { IResponseUser } from 'src/app/shared/interfaces/user/user.response.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Login, Logout, Register } from '../actions/auth.actions';
import { tap } from 'rxjs/operators';

export class AuthStateModel {
  user: IUser | null;
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
      tap((response: IResponseUser) => {
        localStorage.setItem('access-token', response.accessToken);
        const exprDate = new Date(Date.now() + 3600 * 10);

        localStorage.setItem('expiresIn', exprDate.toString());
        localStorage.setItem('user', response.username);
        localStorage.setItem('id', response.id || '');
        const state = getState();
        setState({ ...state, user: response });
        if (response.username !== null) {
          localStorage.setItem('auth', JSON.stringify(true));
        }
        this.authService.setAuth(true);
        this.authService.setUser(response.username);
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
