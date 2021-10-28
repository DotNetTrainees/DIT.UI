import { IAuthUser } from 'src/app/shared/interfaces/user/auth.user.interface';
import { IRegisterUser } from 'src/app/shared/interfaces/user/register.user.interface';

export class Login {
  static readonly type = '[Authentication] Login';
  constructor(public payload: IAuthUser) {}
}

export class Register {
  static readonly type = '[Authentication] Register';
  constructor(public payload: IRegisterUser) {}
}

export class Logout {
  static readonly type = '[Authentication] Logout';
}
