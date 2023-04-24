import User from "../database/mongoose/UserSchema";
import { IUser } from "../../domain/entities/IUser";
import { IUsersRepository } from "../../domain/repositories/IUsersRepository";

export class UsersRepository implements IUsersRepository {
  async save(user: IUser): Promise<IUser> {
    const createdUser = await User.create(user);
    return createdUser.toObject();
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email }).lean();
    return user ? user : null;
  }

  async findByPhoneNumber(phoneNumber: string): Promise<IUser | null> {
    const user = await User.findOne({ phoneNumber }).lean();
    return user ? user : null;
  }

  async findById(id: string): Promise<IUser | null> {
    const user = await User.findById(id).lean();
    return user ? user : null;
  }
}
