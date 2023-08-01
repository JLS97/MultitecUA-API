import { IUser } from "../entities/Users/IUser";

export interface IUsersRepository {
  findById(id: string): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | null>;
  findByPhoneNumber(phoneNumber: string): Promise<IUser | null>;
  save(user: IUser): Promise<IUser>;
  hashPassword(password: string): Promise<string>;
  checkPassword(password: string, hashedPassword: string): Promise<boolean>;
  generateJWT(user: IUser): string;
  updateUserData(user: IUser): Promise<IUser>;
  deleteUser(id: string): Promise<IUser>;
  getAllUsers(): Promise<IUser[]>;
}
