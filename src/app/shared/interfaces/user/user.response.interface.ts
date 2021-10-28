import { IUser } from "./user.interface";

export interface IResponseUser extends IUser {
  accessToken: string;
  roles: string[];
}
