import { IUser } from "../entities/IUser";

export interface IUsersRepository {
  findByEmail(email: string): Promise<IUser | null>;
  findByPhoneNumber(phoneNumber: string): Promise<IUser | null>;
  save(user: IUser): Promise<IUser>;
}
