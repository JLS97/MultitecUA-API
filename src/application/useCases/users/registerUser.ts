import { IUser } from "../../../domain/entities/Users/IUser";
import { IUsersRepository } from "../../../domain/repositories/IUsersRepository";
import { HttpError } from "../../shared/errors/HttpError";
import { validateUser } from "../../shared/utils/validateUserData";
import { v4 as uuidv4 } from 'uuid';
export class RegisterUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userData: IUser): Promise<IUser> {
    const { password } = userData;

    if (!validateUser(userData)) {
      throw new HttpError(400, "Missing parameters: name, phoneNumber, email or password");
    }

    const hashedPassword = await this.usersRepository.hashPassword(password);

    const userToSave: IUser = {
      ...userData,
      id: uuidv4(),
      phoneNumber: uuidv4(),
      password: hashedPassword,
    };

    const user = await this.usersRepository.save(userToSave);

    const response = {
      ...user,
    }

    return response;
  }
}