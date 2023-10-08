import User from "../database/mongoose/UserSchema";
import { IUser } from "../../domain/entities/Users/IUser";
import { IUsersRepository } from "../../domain/repositories/IUsersRepository";
import { HttpError } from "../../application/shared/errors/HttpError";
import * as jose from 'jose';

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

  async hashPassword(passwordToHash: string): Promise<string> {
    // const salt = bcrypt.genSaltSync(10);
    // const hashedPassword = bcrypt.hashSync(password, salt);

    // @ts-ignore
    const hashedPassword = await Bun.password.hash(passwordToHash);

    return hashedPassword;
  }

  async checkPassword(passwordToCheck: string, hashedPassword: string): Promise<boolean> {
    // const isPasswordValid = bcrypt.compareSync(password, hashedPassword);
    
    // @ts-ignore
    const isPasswordValid = Bun.password.verify(passwordToCheck, hashedPassword);
    return isPasswordValid;
  }

  async generateJWT(user: IUser): Promise<string> {
    // jswonwebtoken implementation
    // const token = jwt.sign({email: user.email, rol: user.rol, userId: user.id}, 'MT-SECRET', { expiresIn: '24h' });

    const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);
    const alg = 'HS256';
    const token = await new jose.SignJWT({email: user.email, rol: user.rol, userId: user.id})
      .setProtectedHeader({ alg })
      .setExpirationTime('24h')
      .sign(jwtSecret);

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
