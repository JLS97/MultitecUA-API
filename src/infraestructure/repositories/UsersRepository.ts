import User from "../database/mongoose/UserSchema";
import { IUser } from "../../domain/entities/IUser";
import { IUsersRepository } from "../../domain/repositories/IUsersRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

  async hashPassword(password: string): Promise<string> {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }

  async checkPassword(password: string, hashedPassword: string): Promise<boolean> {
    const isPasswordValid = bcrypt.compareSync(password, hashedPassword);
    return isPasswordValid;
  }

  generateJWT(user: IUser): string {
    const token = jwt.sign({email: user.email, rol: user.rol}, 'MT-SECRET', { expiresIn: '24h' });
    return token;
  }

  async updateUserData(userData: IUser): Promise<IUser | null> {
    const user = await User.findOneAndUpdate({ email: userData.email }, userData, { new: true }).lean();
    return user ? user : null;
  }

  async deleteUserData(email: string): Promise<IUser | null> {
    const deletedUser = await User.findOneAndDelete({ email }).lean();
    return deletedUser ? deletedUser : null;
  }

  async getAllUsers(): Promise<IUser[] | null> {
    const users = await User.find().lean();
    return users ? users : null;
  }

}
