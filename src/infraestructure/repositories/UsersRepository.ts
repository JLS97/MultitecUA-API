import User from "../database/mongoose/UserSchema";
import { IUser } from "../../domain/entities/Users/IUser";
import { IUsersRepository } from "../../domain/repositories/IUsersRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { HttpError } from "../../application/shared/errors/HttpError";

export class UsersRepository implements IUsersRepository {
  async save(user: IUser): Promise<IUser> {
    const createdUser = await User.create(user);
    if(!createdUser) {
      throw new HttpError(400, `Error creating user`);
    };
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

  async findById(id: string): Promise<IUser> {
    const user = await User.findById(id).lean();
    if(!user) {
      throw new HttpError(404, `User not found`);
    };
    return user;
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
    const token = jwt.sign({email: user.email, rol: user.rol, userId: user.id}, 'MT-SECRET', { expiresIn: '24h' });
    return token;
  }

  async updateUserData(userData: IUser): Promise<IUser> {
    const user = await User.findOneAndUpdate({ email: userData.email }, userData, { new: true }).lean();
    if(!user) {
      throw new HttpError(404, `Error updating user`);
    };
    return user;
  }

  async deleteUser(id: string): Promise<IUser> {
    const deletedUser = await User.findByIdAndDelete(id).lean();
    if(!deletedUser) {
      throw new HttpError(404, `Error deleting user`);
    }
    return deletedUser;
  }

  async getAllUsers(): Promise<IUser[]> {
    const users = await User.find().lean();
    if(!users) {
      throw new HttpError(404, `Error getting users`);
    }
    return users;
  }

}
