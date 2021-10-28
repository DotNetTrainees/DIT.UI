import { IUser } from 'src/app/shared/interfaces/user/user.interface';

export class Login {
  static readonly type = '[Authentication] Login';
  constructor(public payload: IUser) {}
}

export class Register {
  static readonly type = '[Authentication] Register';
  constructor(public payload: IUser) {}
}

export class Logout {
  static readonly type = '[Authentication] Logout';
}
